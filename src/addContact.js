import { manageContacts } from "./js/manageContacts";

function AddContact() {
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
                manageContacts.addContacts({

                    firstName: array[0],
                    lastName: array[1],
                    cellphoneNumber: "11111111",
                    email: "mail@fanap.ir"
                })
            }else{
            alert("لطفا یک شخص را برای تماس انتخاب نمایید.");
        }
    });
}
const addContact = new AddContact();
export {addContact}



