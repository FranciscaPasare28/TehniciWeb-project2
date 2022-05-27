function Bilete1(parametru){
    window.location.href="http://localhost:3000/"+parametru;
     console.log("ok")
 }
 
let vec = [[],[],[]]
let ok=0
setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById("rcl").innerHTML = "It's only : "+date.toLocaleTimeString()+" so that means you still have enough time to buy at least one ticket !!";
}

function modifyArray(obj,pos,operation) {

    const index = parseInt(obj.closest('div').classList[1].slice(-1));
    const output = document.getElementById('output' + index);
    const name = document.getElementsByClassName('Options' + index)[pos].innerText.slice(0, -1);

    let check = 0;
    let compIndex;

    for (let i = 0; i < vec[index].length; ++i)
        if (vec[index][i].nume === name) {
            compIndex = i;
            check = 1;
            break;
        }

    if (operation)
        if (check)
            vec[index][compIndex].valoare++;
        else{
            vec[index].push({nume: name, valoare: 1})
            if(ok==0){
                let btn=document.createElement("button");
                btn.className="buton";
                btn.innerHTML="View";
                btn.onclick= function (){
                    vec[0] = vec[1].concat(vec[2]);
                    let stringOutput="";
                    if(vec[0].length==0){
                        document.getElementById('output3').innerText="Nu ai adaugat nimic in cos!";
                    }
                    else{
                        let nr=0;
                        for(let i=0; i<vec[0].length; i++){
                            stringOutput += (vec[0][i].valoare + "x " + vec[0][i].nume + '\n');
                            nr=i;
                        }
                          let varr=document.getElementById('output3')
                          varr.innerText=stringOutput;
                          let bilete=document.getElementById('output3').innerText;
                          bilete=bilete.split("\n");
                          for(let i=0; i<bilete.length-1; i++){
                              let nume="text"+`${i}`
                              localStorage.setItem(nume,bilete[i]);
                          }
                          document.getElementById("set").innerText=varr.innerText
                    }
                };
                document.getElementById('output4').append(btn);
                ok=1;
            }
        }
    else if (check) {
        vec[index][compIndex].valoare--;
        if (vec[index][compIndex].valoare < 1)
            vec[index].splice(compIndex, 1);
        if(vec[index].length==0){
            document.getElementById("output3").innerText="";
            document.getElementById('output4').innerText="";
            ok=0;
        }
    }

    vec[index].sort(compare);
    let outputString = '';
    for (let i = 0; i < vec[index].length; ++i)
        outputString += (vec[index][i].valoare + "x " + vec[index][i].nume + '\n');
    output.innerText = outputString;

}

function ClearElements(){
    localStorage.clear();
    document.getElementById("set").innerText='';
}

function RemoveElement(){
    let lista=Object.keys(localStorage);
    localStorage.removeItem(lista[-1]);
    document.getElementById("set").innerText='';
    lista.splice(-1);
    console.log(lista)
    for(let i=0; i<lista.length; i++)
    document.getElementById("set").innerText+=(localStorage.getItem(lista[i])+"\n");
  
}

function compare(a,b)
{
    if(a.valoare>b.valoare)
        return 1;
    else
        return -1;
}

function popArray(index){
    const output = document.getElementById('output'+index);
    vec[index].pop();
    if(vec[index].length==0){
        const myTimeout = setTimeout(Stergere, 800);

        function Stergere(){
            document.getElementById("output3").innerText="";
            document.getElementById('output4').innerText="";
            ok=0;
        }
    }
    let outputString = "";
    for(let i = 0 ; i < vec[index].length; ++i)
        outputString += (vec[index][i].valoare + "x " + vec[index][i].nume + '\n');
    output.innerText = outputString;
}

function ZoomList(e){
    e.stopPropagation();
    document.getElementById("output3").style.color='aqua';
    document.getElementById("output3").style.fontSize = "x-large";
}

function removeZoom(e){
    document.getElementById("output3").style.color='black';
    document.getElementById("output3").style.fontSize = "medium";
}

document.getElementById("output3").addEventListener("click",ZoomList);
document.addEventListener("click",removeZoom);

function Avertizment(tasta) {
    var x = tasta.key;
    if(x==='End'){
        alert("Not so fast!! Go back!");
        const element = document.getElementById("insist");
        document.getElementById("insist").innerText="Let's party together!";
        const c1=Math.random()*255;
        const c2=Math.random()*255;
        const c3=Math.random()*255

        let culoare="rgb("+c1+", "+c2+", "+c3;
        element.style.color=culoare;
        const cssObj = window.getComputedStyle(element, null);
        let bgColor = cssObj.getPropertyValue("color");
        document.getElementById("inside").innerText="You probably haven't noticed (or so I hope), but when you press the END key at the top you get a color test:";
        document.getElementById("culoarea").innerHTML = bgColor;
        document.getElementById("culoarea").style.color=culoare;

    }
}
document.addEventListener("keydown", Avertizment)


function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function getPersonalData()
{
    let stringInput = document.getElementsByClassName('inputV');
    let dataObj = {city:'',date:'',email:'',place:'',people:'',firstName:'',lastName:''}
    for(let i = 0; i < stringInput.length; ++i)
        if(stringInput[i].value !== '')
        {
            let key = stringInput[i].name;
            dataObj[key] = stringInput[i].value;
        }
    stringInput = document.getElementsByClassName('inputCheck');
    for(let i = 0 ;i < stringInput.length; ++i)
        if(stringInput[i].checked) {
            dataObj.place = stringInput[i].value;
            break;
        }
    stringInput = document.getElementsByClassName('inputCheck1');
    for(let i = 0 ;i < stringInput.length; ++i)
        if(stringInput[i].checked){
            dataObj.people = stringInput[i].value;
            break;
        }
    const list = Object.keys(dataObj);
    const len = list.length;
    let valid = true;

    let unknown = [];
    const re=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    const found=dataObj.date.match(re);
    if(!found){
        valid=false;
        unknown.push('date');
    }
    const re1=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const found1=dataObj.email.match(re1);
    if(!found1){
        valid=false;
        unknown.push('email');
    }

    for(let i = 0 ; i < len; ++i) {
        if (dataObj[list[i]] === '') {
            valid = false;
            unknown.push(list[i]);
        }
    }
    const output= document.getElementById('outForm')
    if(valid)
    {
        output.innerText = 'City: ' + dataObj.city + '\nDate: '+ dataObj.date +
            '\nEmail: ' + dataObj.email + '\nPlace: '+ dataObj.place + '\nPeople: ' + dataObj.people + " people\nFirst name: "
            + dataObj.firstName + '\nLast name: '+ dataObj.lastName;
    }
    else
    {
        let outputString = 'Invalid fields: ';
        for(let i = 0; i < unknown.length; ++i)
            outputString = outputString + unknown[i] + ' /';
        output.innerText = outputString;
    }

}

function TariEuropa(){
    let listaConcerte=document.getElementsByTagName("h4")

    let listaTari=["Bulgaria","Italia","Monaco","Norvegia","Croatia","Slovacia","Irlanda","Cehia","Liechtenstein","Polonia","Grecia","Austria","Cipru","Islanda","Finlanda","Elvetia","Malta","Spania","Lituania","Franta","Ungaria","Belgia","Estonia","Germania","Letonia","Slovenia","Andorra","Danemarca","Insulele Feroe","Tarile de Jos","Vatican"]
    let listaTariEuropa=[]
    for(let i=0; i<listaTari.length; i++)
        for(let j=0; j<listaConcerte.length; j++)
            if(listaConcerte[j].innerText.includes(listaTari[i]))
                listaTariEuropa.push(listaConcerte[j].innerText)
    for(let i=0; i<listaTariEuropa.length; i++)
        document.getElementById("europa").innerText+=(listaTariEuropa[i]+"\n");
}