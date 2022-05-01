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
                    console.log({result});
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
}
const manageMessages = new ManageMessages();
if(window) {
    if (!window.POD) {
        window.POD = {};
    }
    window.POD.ManageMessages = manageMessages;
}
export {manageMessages};