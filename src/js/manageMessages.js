import {params} from "../js/params";
var PodChat = require('podchat-browser');

function ManageMessages() {
    var chatAgent = new PodChat(params);
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
}
const manageMessages = new ManageMessages();
if(window) {
    if (!window.POD) {
        window.POD = {};
    }
    window.POD.ManageMessages = manageMessages;
}
export {manageMessages};