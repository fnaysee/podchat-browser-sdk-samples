import {manageContacts} from "./js/manageContacts";

function GetContact() {
    var myParent = document.body;
    const array = [];
    var addFieldSet = document.createElement('fieldset');
    addFieldSet.className="fdl-style";
    var addLegend = document.createElement('legend');
    addLegend.innerHTML = "Get Contacts";
    addFieldSet.appendChild(addLegend);

    var getContactDrp = document.createElement("select");
    getContactDrp.id = "getContactId";
    myParent.appendChild(getContactDrp);

    var defaultOption = document.createElement("option");
    defaultOption.text = "انتخاب کنید"
    defaultOption.text = "انتخاب کنید"
    getContactDrp.appendChild(defaultOption);

        manageContacts.getContacts().then(result => {
           result.map(item =>  array.push(item));
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.id = array[i].id;
            option.value = array[i].firstName + " " + array[i].lastName;
            option.text = array[i].firstName + " " + array[i].lastName;
            getContactDrp.appendChild(option);
        }
        }
    )
    const removeBtn = document.createElement("button");
    removeBtn.id = "removeBtnId";
    removeBtn.innerHTML = "remove contact";
    removeBtn.className = "btn-style";

    const app = document.querySelector('#root');
    app.append(addFieldSet);
    addFieldSet.appendChild(getContactDrp);
    addFieldSet.appendChild(removeBtn);

    const getSelectedPerson = () => {
            const selected = document.getElementById("getContactId");
            const selectedId = selected.options[selected.selectedIndex].id;
        manageContacts.removeContacts({
            id: selectedId
        })
        window.onload;
    }
    document.getElementById("removeBtnId").addEventListener('click', function () {
        getSelectedPerson();
    });
}
const getContact = new GetContact();
export {getContact}