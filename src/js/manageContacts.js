import {params} from "../js/params";
var PodChat = require('podchat-browser');

function ManageContacts() {
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
}
const manageContacts = new ManageContacts();
if(window) {
    if (!window.POD) {
        window.POD = {};
    }
    window.POD.ManageContacts = manageContacts;
}
export {manageContacts};



