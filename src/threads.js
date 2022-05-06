import { manageThreads } from "./js/manageThreads";
import style from "./styles/index.scss";


function Threads() {
    const array = [];
    var myParent = document.body;
    var addFieldSet = document.createElement('fieldset');
    addFieldSet.className="fdl-style";
    var addLegend = document.createElement('legend');
    addLegend.innerHTML = "Add Threads";

    var lblThread = document.createElement('Label');
    lblThread.innerHTML = "enter a P2P Thread Id:  ";

    var addThreadTxt = document.createElement('input');
    addThreadTxt.id = "addThreadId";

    var divElement =  document.createElement('div');
    divElement.className = "divElement-style";
    var lblThreadId = document.createElement('Label');
    lblThreadId.className = "lblId-style"

    var lblThreadTitle = document.createElement('Label');
    var breakLine = document.createElement("br");

    const addBtn = document.createElement("button");
    addBtn.id = "addBtnId";
    addBtn.innerHTML = "add thread";
    addBtn.className = "btn-style";

    addFieldSet.appendChild(addLegend);
    addFieldSet.appendChild(lblThread);
    addFieldSet.appendChild( addThreadTxt);
    addFieldSet.appendChild(addBtn);

    const app = document.querySelector('#root');
    app.append(addFieldSet);

    document.getElementById("addBtnId").addEventListener('click', function () {
        let inputValue = document.getElementById("addThreadId");
       let id = inputValue.value;
       let convertToNum = parseInt(id);
       if(id !== "" && typeof (convertToNum) === "number" ){
           manageThreads.addThread({id: convertToNum});
       }
       else{
           alert("has error!!")
       }
    });

    var getFieldSet = document.createElement('fieldset');
    getFieldSet.className="fdl-style";
    var getLegend = document.createElement('legend');
    getLegend.innerHTML = "Get Threads";


    var getThreadsDrp = document.createElement("select");
    getThreadsDrp.id = "getThreadId";
    myParent.appendChild(getThreadsDrp);

    var defaultOption = document.createElement("option");
    defaultOption.text = "انتخاب کنید"
    defaultOption.text = "انتخاب کنید"
    getThreadsDrp.appendChild(defaultOption);


    manageThreads.getThreads().then(result => {
            result.map(item => {
                array.push(item)
            });
            for (var i = 0; i < array.length; i++) {
                var option = document.createElement("option");
                option.id = array[i].id;
                option.value = array[i].title;
                option.text = array[i].title;
                getThreadsDrp.appendChild(option);
            }
        }
    )
    const getHistoryBtn = document.createElement("button");
    getHistoryBtn.id = "historyBtnId";
    getHistoryBtn.innerHTML = "get history";
    getHistoryBtn.className = "btn-style";

    getFieldSet.appendChild(getLegend);
    getFieldSet.appendChild(getThreadsDrp);
    getFieldSet.appendChild(getHistoryBtn);
    getFieldSet.appendChild(divElement);

    divElement.appendChild(lblThreadId);
    divElement.appendChild(lblThreadTitle);


    const app1 = document.querySelector('#root');
    app1.append(getFieldSet);

    const getHistroy = () => {
        const selected = document.getElementById("getThreadId");
        const selectedId = selected.options[selected.selectedIndex].id;
        const selectedTitle = selected.options[selected.selectedIndex].value;
        manageThreads.getHistory({
                count: 50,
                offset: 0,
                threadId: selectedId
            }).then((result) => {
                for (var i = 0; i < result.length; i++) {
                    var label = document.createElement("label");
                    label.className = "history-item"
                    label.innerHTML = result[i].message;
                    divElement.appendChild(label);
                    divElement.appendChild(breakLine);
                }
            }
        )
        window.onload;
        lblThreadId.innerHTML = `thread Id: ${selectedId}`;
        lblThreadTitle.innerHTML = `thread Name: ${selectedTitle}`;
    }

    document.getElementById("historyBtnId").addEventListener('click', function () {
        getHistroy();
    });

}
const threads = new Threads();
export {threads}
