
برای استفاده از متدهای سرویس پیام رسان ابتدا خط دستور زیر را بر روی پروژه ی خود نصب می نماییم.

npm install podchat-browser --save

برای ساخت ماژول chatAgent:

var PodChat = require('podchat-browser');
var chatAgent = new PodChat(params);

با استفاده از متد getContacts لیست کانتکت ها رو دریافت میکنیم:


chatAgent.getContacts({
                count: 50,
                offset: 0
            }, function (result) {
                resolve(result.result.contacts)
            }) });

در صورتی که یوزر در لیستcontact های ما باشد، میتوانیم thread ایجاد کنیم در غیر اینصورت ابتدا contact ایجاد کرده و سپس thread ایجاد میکنیم.


برای ایجاد ترد:

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

برای ایجاد contact:

chatAgent.addContacts({
        firstName: items.firstName,
        lastName: items.lastName,
        cellphoneNumber: items.cellphoneNumber,
        email: items.email
    }, function (result) {
        console.log(result)

    برای حذف contact:

  chatAgent.removeContacts({
            id: items.id
        }, function (result) {
            console.log(result);
        });

برای مشاهده لیست تردها از متد getThreads استفاده میکنیم:

chatAgent.getThreads({
                count: 50,
                offset: 0
            }, function (threadsResult) {
                resolve(threadsResult.result.threads);
                });

برای مشاهده history هر ترد، id ترد مورد نظر را به متد getHistory می دهیم:
chatAgent.getHistory({
                count: items.count,
                offset: items.offset,
                threadId: items.threadId
            }, function (historyResult) {
                resolve(JSON.stringify(historyResult.result.history));
            });
برای ارسال پیام بایستی id  ترد را داشته باشیم و چنانچه پیام ارسال تکست باشد messageType  را صفر ست میکنیم.

chatAgent.sendTextMessage({
                threadId: items.threadId,
                textMessage: items.textMessage,
                messageType: 0
            }, {
                onSent: function (result) {
                    console.log(result.uniqueId + " \t has been Sent!");
                },
                onDeliver: function (result) {
                    console.log(result.uniqueId + " \t has been Delivered!");
                },
                onSeen: function (result) {
                    console.log(result.uniqueId + " \t has been Seen!");
                }
            });

برای فورارد کردن پیام id ترد و id پیام را در متد forwardMessage ست می کنیم:
 chatAgent.forwardMessage({
                threadId: items.threadId,
                messageIds: items.messageIds
            }, {
                onSent: function (result) {
                   console.log(result.uniqueId);
                },
                onDeliver: function (result) {
                   console.log(result.uniqueId);
                },
                onSeen: function (result) {
                    console.log(result.uniqueId);
                }
            });
برای ارسال پیام از نوع فایل علاوه بر id  ترد پراپرتی file  داریم که با فایلی که انتخاب میکنیم مقداردهی می شود.


chatAgent.sendFileMessage({
                threadId: threadId,
                file: file,
                content: caption,
                systemMetadata: metadata
            }, {
                onSent: function (result) {
                    console.log(result.uniqueId + " \t has been Sent!");
                },
                onDeliver: function (result) {
                    console.log(result.uniqueId + " \t has been Delivered!");
                },
                onSeen: function (result) {
                    console.log(result.uniqueId + " \t has been Seen!");
                },
                onFileUpload: function (result) {
                    console.log('File Upload is done', result);
                }
          




