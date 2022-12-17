import {params} from ".//params";
var PodChat = require('podchat-browser');

function ManageServices() {
    var p2pThreadId;
    var chatAgent = new PodChat(params);
    this.addContacts = function(items){
        chatAgent.addContacts({
        firstName: items.firstName,
        lastName: items.lastName,
        cellphoneNumber: items.cellphoneNumber,
        email: items.email
    }, function (result) {
        console.log(result)
    });
    }

    this.removeContacts = function(items) {
        chatAgent.removeContacts({
            id: items.id
        }, function (result) {
            console.log(result);
        });
    }

    this.getContacts = function(items) {
        return new Promise((resolve, reject) => {
            chatAgent.getContacts({
                count: 50,
                offset: 0
            }, function (result) {
                resolve(result.result.contacts)
            })
        })
    }
    this.sendTextMessage = function (items) {
        return new Promise((resolve, reject) => {
            chatAgent.sendTextMessage({
                threadId: items.threadId,
                textMessage: items.textMessage,
                messageType: 0
            }, {
                onSent: function (result) {
                    resolve(result.uniqueId);
                    console.log(result.uniqueId + " \t has been Sent!");
                },
                onDeliver: function (result) {
                    resolve(result.uniqueId);
                    console.log(result.uniqueId + " \t has been Delivered!");
                },
                onSeen: function (result) {
                    resolve(result.uniqueId);
                    console.log(result.uniqueId + " \t has been Seen!");
                }
            });
        })
    }
    this.forwardMessage = function (items) {
        return new Promise((resolve, reject) => {
            chatAgent.forwardMessage({
                threadId: items.threadId,
                messageIds: items.messageIds
            }, {
                onSent: function (result) {
                    resolve(result.uniqueId);
                },
                onDeliver: function (result) {
                    resolve(result.uniqueId);
                },
                onSeen: function (result) {
                    resolve(result.uniqueId);
                }
            });
        })
    }
    this.sendFileMessage = function (items) {
        return new Promise((resolve, reject) => {
            chatAgent.sendFileMessage({
                threadId: items.threadId,
                file: items.file,
                content: items.content,
                userGroupHash: items.userGroupHash,
                messageType: items.messageType,
                metadata: {
                    custom_name: "John Doe"
                }
            }, {
                onResult: function (result) {
                    console.log("1111", result)
                    resolve(result);
                    if (result.hasError) {
                        console.log('[examples/html] upload of an item failed', result)
                    }
                },
                onSent: function (result) {
                    resolve(result);
                    console.log(result.uniqueId + " \t has been Sent!");
                },
                onDeliver: function (result) {
                    resolve(result);
                    console.log(result.uniqueId + " \t has been Delivered!");
                },
                onSeen: function (result) {
                    resolve(result);
                    console.log(result.uniqueId + " \t has been Seen!");
                },
                onFileUpload: function (result) {
                    resolve(result);
                    console.log('File Upload is done', result);
                }
            })
        })
    }
    this.replyFileMessage = function (items) {
        return new Promise((resolve, reject) => {
            chatAgent.replyFileMessage({
                threadId: items.threadId,
                repliedTo: items.repliedTo,
                file: items.file,
                content: items.content,
                userGroupHash: items.userGroupHash,
                messageType: items.messageType,
                metadata: {
                    custom_name: "John Doe"
                }
            }, {
                onSent: function (result) {
                    resolve(result);
                    console.log(result.uniqueId + " \t has been Sent!");
                },
                onDeliver: function (result) {
                    resolve(result);
                    console.log(result.uniqueId + " \t has been Delivered!");
                },
                onSeen: function (result) {
                    resolve(result);
                    console.log(result.uniqueId + " \t has been Seen!");
                }
            });
        })
    }
    this.getThreads = function (items) {
        return new Promise((resolve, reject) => {
            chatAgent.getThreads({
                count: 50,
                offset: 0
            }, function (threadsResult) {
                resolve(threadsResult.result.threads);
            });
        })
    }
    this.addThread = function(items){
        chatAgent.createThread({
            type: 'NORMAL',
            invitees: [
                {
                    id: items.id,
                    idType: 'TO_BE_USER_CONTACT_ID'
                }]
        }, function (createThreadResult) {
            if (!createThreadResult.hasError && createThreadResult.result.thread.id > 0) {
                p2pThreadId = createThreadResult.result.thread.id;
            }
        })
    }
    this.getHistory = function (items) {
        return new Promise((resolve, reject) => {
            chatAgent.getHistory({
                count: items.count,
                offset: items.offset,
                threadId: items.threadId
            }, function (historyResult) {
                resolve(historyResult.result.history);
            });
        })
    }
}
const manageServices = new ManageServices();
if(window) {
    if (!window.POD) {
        window.POD = {};
    }
    window.POD.ManageServices = manageServices;
}
export {manageServices};







