import { manageServices } from "../services/manageServices";
import 'pod-comm-offline-sdk/dist/node/css/material-icons.min.css'
import 'pod-comm-offline-sdk/dist/node/css/style.css'

import OfflinePlayerSDK from 'pod-comm-offline-sdk'

function Contacts() {
    var myParent = document.body;
    var array = [];

    var persons = ["یک آیتم را انتخاب نمایید...",
        "hossein zamani",
        "maryam saberi",
        "miremad abrishami",
        "ehsan salehi",
        "ahmad moghani"];

    var addFieldSet = document.createElement('fieldset');
    addFieldSet.className="fdl-style";
    var addLegend = document.createElement('legend');
    addLegend.innerHTML = "Add Contact"
    addFieldSet.appendChild(addLegend);

    var lbl = document.createElement('label');
    lbl.innerHTML = "select a person";
    lbl.className = "lbl-style";

    var addContact = document.createElement("select");
    addContact.id = "addContact";
    myParent.appendChild(addContact);

    for (var i = 0; i < persons.length; i++) {
        var option = document.createElement("option");
        option.value = persons[i];
        option.text = persons[i];
        addContact.appendChild(option);
    }

    const btn = document.createElement("button");
    btn.id = "addBtnContact";
    btn.innerHTML = "add contact";
    btn.className = "btn-style";

    const app = document.querySelector('#root');
    app.append(addFieldSet);
    addFieldSet.appendChild(lbl);
    addFieldSet.appendChild(addContact);
    addFieldSet.appendChild(btn);

    document.getElementById("addBtnContact").addEventListener('click', function () {
        // getSelectedPerson();
        const selected = document.getElementById("addContact");
        const selectedPerson = selected.options[selected.selectedIndex].text;
        if( selectedPerson !== "" ){
                array = selectedPerson.split(' ');
            manageServices.addContacts({

                    firstName: array[0],
                    lastName: array[1],
                    cellphoneNumber: "11111111",
                    email: "mail@fanap.ir"
                })
            }else{
            alert("لطفا یک شخص را برای تماس انتخاب نمایید.");
        }
        let token = "ed24e37c7ee84313acf2805a80122f94";
        let hashfile = "AW3S5UBDAOMZMN2C";
        let baseUrl = "http://offline-stream.pod.ir";
        let requiredQuality = 720;
        let SDK = new window.POD.OfflinePlayerSDK({
            containerId: "root",
            env: 'main',
            logging: {
                info: true,
                debug: true,
                error: true
            },
            showForwardBackwardButtons: false,
            fullScreenPlayer: false
        });
        SDK.playMedia({
            hash: hashfile,
            quality: requiredQuality,
            token: token,
        });
    });
    var body = document.body;
    let array2 = [];
    var getContactFieldSet = document.createElement('fieldset');
    getContactFieldSet.className = "fdl-style";
    var getContactLegend = document.createElement('legend');
    getContactLegend.innerHTML = "Get Contacts";
    getContactFieldSet.appendChild(getContactLegend);

    var getContactDrp = document.createElement("select");
    getContactDrp.id = "getContactId";
    body.appendChild(getContactDrp);

    var defaultOption = document.createElement("option");
    defaultOption.text = "انتخاب کنید"
    defaultOption.text = "انتخاب کنید"
    getContactDrp.appendChild(defaultOption);

    manageServices.getContacts().then(result => {
          result.map(item => array2.push(item));
          for (var i = 0; i < array2.length; i++) {
              var option = document.createElement("option");
              option.id = array2[i].id;
              option.value = array2[i].firstName + " " + array2[i].lastName;
              option.text = array2[i].firstName + " " + array2[i].lastName;
              getContactDrp.appendChild(option);
          }
      }
    )
    const removeBtn = document.createElement("button");
    removeBtn.id = "removeBtnId";
    removeBtn.innerHTML = "remove contact";
    removeBtn.className = "btn-style";

    const app2 = document.querySelector('#root');
    app2.append(getContactFieldSet);
    getContactFieldSet.appendChild(getContactDrp);
    getContactFieldSet.appendChild(removeBtn);

    const getSelectedPerson = () => {
        const selected = document.getElementById("getContactId");
        const selectedId = selected.options[selected.selectedIndex].id;
        manageServices.removeContacts({
            id: selectedId
        })
        window.onload;
    }
    document.getElementById("removeBtnId").addEventListener('click', function () {
        getSelectedPerson();
    });
}
const contacts = new Contacts();
export {contacts}



