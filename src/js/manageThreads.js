import {params} from "../js/params";
var PodChat = require('podchat-browser');

function ManageThreads() {
    var p2pThreadId;
    var chatAgent = new PodChat(params);
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
                resolve(JSON.stringify(historyResult.result.history));
            });
        })
    }
}

const manageThreads = new ManageThreads();
if(window) {
    if (!window.POD) {
        window.POD = {};
    }
    window.POD.ManageThreads = manageThreads;
}
export {manageThreads};