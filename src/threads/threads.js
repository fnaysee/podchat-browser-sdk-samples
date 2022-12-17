import { manageServices } from "../services/manageServices";
import {manageContacts} from "@/services/manageServices";


function Threads() {
    let history = [];
    const array2 = [];
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
    lblThreadId.className = "lblId-style";

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
           manageServices.addThread({id: convertToNum});
       }
       else{
           alert("has error!!")
       }
    });
    var getThreadsFieldSet = document.createElement('fieldset');
    getThreadsFieldSet.className="fdl-style";
    var div1 = document.createElement('div');
    div1.className = "threads-content";
    var div2 = document.createElement('div');
    div2.className ="rightPart";
    var div3 = document.createElement('div');
    div3.className ="leftPart";
    div3.id = "leftPartId"
    var getThreadsLegend = document.createElement('legend');
    getThreadsLegend.innerHTML = "Get Threads";
    var tbl = document.createElement('table');
    tbl.className = "tbl-getThreads"
    tbl.style.width = '100%';
    tbl.setAttribute('border', 'none');
    tbl.setAttribute('id', 'threadsTable');

    var tbody = document.createElement('tbody');
    div1.appendChild(div2);
    const getHistroy = async (id) => {
        // const selected = document.getElementById("getThreadId");
        return await manageServices.getHistory({
            count: 50,
            offset: 0,
            threadId: id
        });
    }

    manageServices.getThreads().then(result => {
        for (let i in result) {

            let notif = document.createElement('div');
            notif.className = "notifStyle";
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.setAttribute("id", result[i].id)
            tbody.appendChild(tr);
            tr.appendChild(td);
            var txt = document.createTextNode(result[i].title);
            td.appendChild(txt);
            if(result[i].unreadCount > 0){
                notif.innerHTML = result[i].unreadCount;
                td.appendChild(notif);
            }
            let id = result[i].id;
            // td.onClick = myFunc(id);
            td.addEventListener("click", function (){
                let el= document.getElementById('leftPartId');
               if(el.hasChildNodes()){
                   while (el.firstChild) {
                       el.removeChild(el.firstChild);
                   }
                   while(history.length) {
                       history.pop();
                   }
               }
                // document.querySelectorAll('.leftPart>div') && (document.querySelectorAll('.leftPart div').remove);
                getHistroy(id).then(result => {
                    history.push(...result);
                    for(let j in history){
                        let div = document.createElement('div');
                        div.innerHTML = history[j].message;
                        div.style.borderBottom = "1px solid #ccc";
                        div3.appendChild(div);
                    }
                })
            })
        }
    })

    getThreadsFieldSet.appendChild(getThreadsLegend);
    getThreadsFieldSet.appendChild(div1);

    div1.appendChild(div3);
    div2.appendChild(tbl)
    tbl.appendChild(tbody);
    app.appendChild(getThreadsFieldSet);


    //
    // var getFieldSet = document.createElement('fieldset');
    // getFieldSet.className="fdl-style";
    // var getLegend = document.createElement('legend');
    // getLegend.innerHTML = "Get History";
    //
    //
    // var getThreadsDrp = document.createElement("select");
    // getThreadsDrp.id = "getThreadId";
    // myParent.appendChild(getThreadsDrp);
    //
    // var defaultOption = document.createElement("option");
    // defaultOption.text = "انتخاب کنید"
    // defaultOption.text = "انتخاب کنید"
    // getThreadsDrp.appendChild(defaultOption);
    //
    //
    // manageThreads.getThreads().then(result => {
    //         result.map(item => {
    //             array.push(item)
    //         });
    //         for (var i = 0; i < array.length; i++) {
    //             var option = document.createElement("option");
    //             option.id = array[i].id;
    //             option.value = array[i].title;
    //             option.text = array[i].title;
    //             getThreadsDrp.appendChild(option);
    //         }
    //     }
    // )
    // const getHistoryBtn = document.createElement("button");
    // getHistoryBtn.id = "historyBtnId";
    // getHistoryBtn.innerHTML = "get history";
    // getHistoryBtn.className = "btn-style";
    //
    // getFieldSet.appendChild(getLegend);
    // getFieldSet.appendChild(getThreadsDrp);
    // getFieldSet.appendChild(getHistoryBtn);
    // getFieldSet.appendChild(divElement);
    //
    // divElement.appendChild(lblThreadId);
    // divElement.appendChild(lblThreadTitle);
    //
    //
    // const app1 = document.querySelector('#root');
    // app1.append(getFieldSet);
    //
    //
    // document.getElementById("historyBtnId").addEventListener('click', function () {
    //     getHistroy();
    // });

}
const threads = new Threads();
export {threads}
