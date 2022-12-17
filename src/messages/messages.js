import { manageServices } from "../services/manageServices";
import style from "../styles/index.scss";


function Messages() {

    var breakLine = document.createElement('br');
    var label = document.createElement('label');
    label.innerHTML = "Thread Id:";
    label.className = "mr-10";
    var input = document.createElement('input');
    input.id = "sendTextThread";
    var sendMessageFieldSet = document.createElement('fieldset');
    sendMessageFieldSet.className="fdl-style";
    var sendMessageLegend = document.createElement('legend');
    sendMessageLegend.innerHTML = "Send Text Message";
    var label1 = document.createElement('label');
    label1.innerHTML = "Message:";
    label1.className = "mr-10";
    var textarea = document.createElement('textarea');
    textarea.id = "sendTextMessage";
    textarea.className = "mr-10 mt-10";
    var button = document.createElement('button');
    button.innerHTML = "Send Text Message";
    button.id = "sendTextButton";

    sendMessageFieldSet.appendChild(sendMessageLegend);
    sendMessageFieldSet.appendChild(label);
    sendMessageFieldSet.appendChild(input);
    sendMessageFieldSet.appendChild(breakLine);
    sendMessageFieldSet.appendChild(label1);
    sendMessageFieldSet.appendChild(textarea);
    sendMessageFieldSet.appendChild(button);


    const app = document.querySelector('#root');
    app.append(sendMessageFieldSet);

    document.getElementById("sendTextButton")
        .addEventListener("click", function () {
            var thread = document.getElementById("sendTextThread").value;
            var message = document.getElementById("sendTextMessage").value;

            manageServices.sendTextMessage({
                threadId: thread,
                textMessage: message
            }).then(uniqueId => console.log("7777", uniqueId));
        });

    var breakLine1 = document.createElement('br');
    var forwardLabel = document.createElement('label');
    forwardLabel.innerHTML = "Thread Id:";
    forwardLabel.className = "mr-10";
    var threadIdInput = document.createElement('input');
    threadIdInput.id = "forwardThreadId";
    threadIdInput.className = "mr-10";
    var messageInput = document.createElement('input');
    messageInput.id = "forwardMessageInputId";
    messageInput.className = "mr-10";

    var forwardMessageFieldSet = document.createElement('fieldset');
    forwardMessageFieldSet.className="fdl-style";
    var forwardMessageLegend = document.createElement('legend');
    forwardMessageLegend.innerHTML = "Forward Message";

    var forwardButton = document.createElement('button');
    forwardButton.innerHTML = "Forward Messages(s)";
    forwardButton.id = "forwardBtnId";
    forwardButton.className = "mt-10"

    forwardMessageFieldSet.appendChild(forwardMessageLegend);
    forwardMessageFieldSet.appendChild(forwardLabel);
    forwardMessageFieldSet.appendChild(threadIdInput);
    forwardMessageFieldSet.appendChild(messageInput);
    forwardMessageFieldSet.appendChild(breakLine1);
    forwardMessageFieldSet.appendChild(forwardButton);


    const app1 = document.querySelector('#root');
    app1.append(forwardMessageFieldSet);

    document.getElementById("forwardBtnId")
        .addEventListener("click", function () {
            var thread = document.getElementById("forwardThreadId").value;
            var messages = document.getElementById("forwardMessageInputId").value;
            messages = messages.split(",").map(function(item) {
                return Number(item);
            });

            manageServices.forwardMessage({
                threadId: Number(thread),
                messageIds: messages instanceof Array ? messages : [ messages ],
            }).then(messageId => console.log("8888", messageId));
        });


    var breakLine10 = document.createElement('br');
    var breakLine2 = document.createElement('br');
    var breakLine3 = document.createElement('br');
    var breakLine4 = document.createElement('br');
    var breakLine5 = document.createElement('br');
    var label2 = document.createElement('label');
    label2.innerHTML = "Thread Id:";
    label2.className = "mr-10";
    var threadInput = document.createElement('input');
    threadInput.id = "threadInputId";
    var sendFileMessageFieldSet = document.createElement('fieldset');
    sendFileMessageFieldSet.className="fdl-style";
    var sendFileMessageLegend = document.createElement('legend');
    sendFileMessageLegend.innerHTML = "Send File Message";
    var label3 = document.createElement('label');
    label3.innerHTML = "Thread Group Hash:";
    label3.className = "mt-10 mr-10";
    var GroupHashInput = document.createElement('input');
    GroupHashInput.className = 'mt-10';
    GroupHashInput.id = "groupHashInputId";
    var label4 = document.createElement('label');
    label4.innerHTML = "Message Type:";
    label4.className = "mt-10 mr-10";
    var messageTypeDrp = document.createElement("select");
    messageTypeDrp.className = "mt-10";
    messageTypeDrp.id = "msgTypeDrpId";
    const messageType = ["یک آیتم را انتخاب نمایید...","POD_SPACE_PICTURE", "POD_SPACE_VIDEO", "POD_SPACE_SOUND", "POD_SPACE_VOICE",
        "POD_SPACE_FILE", "LINK", "STICKER"];
    for (var i = 0; i < messageType.length; i++) {
        var option1 = document.createElement("option");
        option1.value = messageType[i];
        option1.text = messageType[i];
        messageTypeDrp.appendChild(option1);
    }
    var label5 = document.createElement('label');
    label5.innerHTML = "select file:";
    label5.className = "mr-10";
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.id = "sendFileInput";
    fileInput.className = "mt-10";

    var label6 = document.createElement('label');
    label6.innerHTML = "Description:";
    label6.className = "mr-10";

    var txtBoxDescription = document.createElement('textarea');
    txtBoxDescription.id = "sendTextMessage";
    txtBoxDescription.className = "mr-10 mt-10";

    var fileMessageBtn = document.createElement('button');
    fileMessageBtn.innerHTML = "Send File Message";
    fileMessageBtn.id = "fileBtnId";
    fileMessageBtn.className = "mt-10 mr-10";

    var multiFileMessageBtn = document.createElement('button');
    multiFileMessageBtn.innerHTML = "Send Multiple File Message";
    multiFileMessageBtn.id = "multiFileBtnId";
    multiFileMessageBtn.className = "mt-10";

    sendFileMessageFieldSet.appendChild(sendFileMessageLegend);
    sendFileMessageFieldSet.appendChild(label2);
    sendFileMessageFieldSet.appendChild(threadInput);
    sendFileMessageFieldSet.appendChild(breakLine10);
    sendFileMessageFieldSet.appendChild(label3);
    sendFileMessageFieldSet.appendChild(GroupHashInput);
    sendFileMessageFieldSet.appendChild(breakLine2);
    sendFileMessageFieldSet.appendChild(label4);
    sendFileMessageFieldSet.appendChild(messageTypeDrp);
    sendFileMessageFieldSet.appendChild(breakLine3);
    sendFileMessageFieldSet.appendChild(label5);
    sendFileMessageFieldSet.appendChild(fileInput);
    sendFileMessageFieldSet.appendChild(breakLine4);
    sendFileMessageFieldSet.appendChild(label6);
    sendFileMessageFieldSet.appendChild(txtBoxDescription);
    sendFileMessageFieldSet.appendChild(breakLine5);
    sendFileMessageFieldSet.appendChild(fileMessageBtn);
    sendFileMessageFieldSet.appendChild(multiFileMessageBtn);


    const app2 = document.querySelector('#root');
    app2.append(sendFileMessageFieldSet);

    document.getElementById("fileBtnId")
        .addEventListener("click", function () {
            var fileInput = document.getElementById("sendFileInput"),
                image = fileInput.files[0],
                content = document.getElementById("sendTextMessage").value,
                thread = document.getElementById("threadInputId").value,
                messageType = document.getElementById("msgTypeDrpId").value,
                userGroupHash = document.getElementById("groupHashInputId").value;

            manageServices.sendFileMessage({
                threadId: thread,
                file: image,
                content: content,
                userGroupHash: userGroupHash,
                messageType: messageType
            }).then(result => console.log("55555", result));
        });
    document.getElementById("multiFileBtnId")
        .addEventListener("click", function () {
            var fileInput = document.getElementById("sendFileInput"),
                image = fileInput.files[0],
                content = document.getElementById("sendTextMessage").value,
                thread = document.getElementById("threadInputId").value,
                messageType = document.getElementById("msgTypeDrpId").value,
                userGroupHash = document.getElementById("groupHashInputId").value;

            for (var i = 1; i <= 5; i++) {
                setTimeout(function () {
                    manageServices.sendFileMessage({
                        threadId: thread,
                        file: image,
                        content: content,
                        userGroupHash: userGroupHash,
                        messageType: messageType
                    }).then(result => console.log("6666", result))
                })
            }
        })
    //////////////reply file message///////////////

    var breakLine6 = document.createElement('br');
    var breakLine7 = document.createElement('br');
    var breakLine8 = document.createElement('br');
    var breakLine9 = document.createElement('br');
    var breakLine11 = document.createElement('br');
    var breakLine12 = document.createElement('br');
    var threadIdLabel = document.createElement('label');
    threadIdLabel.innerHTML = "Thread Id:";
    threadIdLabel.className = "mr-10";
    var replyThreadIdInput = document.createElement('input');
    replyThreadIdInput.id = "threadInputId";
    var messageIdLabel = document.createElement('label');
    messageIdLabel.innerHTML = "message Id:";
    messageIdLabel.className = "mt-10 mr-10";
    var messageIdInput = document.createElement('input');
    messageIdInput.id = "messageInputId";
    messageIdInput.className = "mt-10";
    var replyMessageFieldSet = document.createElement('fieldset');
    replyMessageFieldSet.className="fdl-style";
    var replyMessageLegend = document.createElement('legend');
    replyMessageLegend.innerHTML = "Reply File Message";
    var userGroupHashLabel = document.createElement('label');
    userGroupHashLabel.innerHTML = "Thread user Group Hash:";
    userGroupHashLabel.className = "mt-10 mr-10";
    var userGroupHashInput = document.createElement('input');
    userGroupHashInput.id = "groupHashInputId";
    userGroupHashInput.className = "mt-10";
    var messageTypeLabel = document.createElement('label');
    messageTypeLabel.innerHTML = "Message Type:";
    messageTypeLabel.className = "mt-10 mr-10";
    var messageTypeDrpDown = document.createElement("select");
    messageTypeDrpDown.className = "mt-10";
    messageTypeDrpDown.id = "msgTypeDrpId";
    const messageTypeArray = ["یک آیتم را انتخاب نمایید...", "TEXT" ,"POD_SPACE_PICTURE", "POD_SPACE_VIDEO", "POD_SPACE_SOUND", "POD_SPACE_VOICE",
        "POD_SPACE_FILE", "LINK", "STICKER"];
    for (var j = 0; j < messageTypeArray.length; j++) {
        var option2 = document.createElement("option");
        option2.value = messageTypeArray[j];
        option2.text = messageTypeArray[j];
        messageTypeDrpDown.appendChild(option2);
    }
    var selectFileLabel = document.createElement('label');
    selectFileLabel.innerHTML = "select file:";
    selectFileLabel.className = "mr-10";
    var uploadFileInput = document.createElement("input");
    uploadFileInput.type = "file";
    uploadFileInput.id = "sendFileInput";
    uploadFileInput.className = "mt-10";

    var describeLabel = document.createElement('label');
    describeLabel.innerHTML = "Description:";
    describeLabel.className = "mr-10";

    var txtBoxDescription2 = document.createElement('textarea');
    txtBoxDescription2.id = "sendTextMessage";
    txtBoxDescription2.className = "mr-10 mt-10";
    var replyFileMessageBtn = document.createElement('button');
    replyFileMessageBtn.innerHTML = "Reply File Message";
    replyFileMessageBtn.id = "fileBtnId";
    replyFileMessageBtn.className = "mt-10 mr-10";

    replyMessageFieldSet.appendChild(replyMessageLegend);
    replyMessageFieldSet.appendChild(threadIdLabel);
    replyMessageFieldSet.appendChild(replyThreadIdInput);
    replyMessageFieldSet.appendChild(breakLine6);
    replyMessageFieldSet.appendChild(messageIdLabel);
    replyMessageFieldSet.appendChild(messageIdInput);
    replyMessageFieldSet.appendChild(breakLine7);
    replyMessageFieldSet.appendChild(userGroupHashLabel);
    replyMessageFieldSet.appendChild(userGroupHashInput);
    replyMessageFieldSet.appendChild(breakLine8);
    replyMessageFieldSet.appendChild(messageTypeLabel);
    replyMessageFieldSet.appendChild(messageTypeDrpDown);
    replyMessageFieldSet.appendChild(breakLine9);
    replyMessageFieldSet.appendChild(selectFileLabel);
    replyMessageFieldSet.appendChild(uploadFileInput);
    replyMessageFieldSet.appendChild(breakLine11);
    replyMessageFieldSet.appendChild(describeLabel);
    replyMessageFieldSet.appendChild(txtBoxDescription2);
    replyMessageFieldSet.appendChild(breakLine12);
    replyMessageFieldSet.appendChild(replyFileMessageBtn);

    const app3 = document.querySelector('#root');
    app3.append(replyMessageFieldSet);

    document.getElementById("replyFileMessageBtn")
        .addEventListener("click", function () {
            var thread = document.getElementById("sendTextThread").value;
            var message = document.getElementById("sendTextMessage").value;

            var fileInput = document.getElementById("sendFileInput"),
                image = fileInput.files[0],
                content = document.getElementById("sendTextMessage").value,
                threadId = document.getElementById("threadInputId").value,
                repliedTo = document.getElementById("messageInputId").value,
                messageType = document.getElementById("msgTypeDrpId").value,
                userGroupHash = document.getElementById("groupHashInputId").value;

            manageServices.replyFileMessage({
                threadId: threadId,
                repliedTo: repliedTo,
                file: image,
                content: content,
                userGroupHash: userGroupHash,
                messageType: messageType
            }).then(uniqueId => console.log("7777", uniqueId));
        });
}
const messages = new Messages();
export {messages}
