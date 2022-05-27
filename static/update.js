function Bilete1(parametru){
    window.location.href="http://localhost:3000/"+parametru;
     console.log("ok")
 }
let objbaza={"nume":"","price":"","disponibilitate":""}
function Informatii(){
    let input=document.querySelectorAll('input')
    let index=document.getElementById("index")
    for(let i=0; i<input.length; i++){
        let string=input[i].getAttribute("name")
        if(string!="index")
        objbaza[string]=input[i].value
    }
    let obj3={'index':index.value,"obiect111":objbaza}
    obj3=JSON.stringify(obj3)
    let settings={method:"PATCH",headers:{"Content-Type":"application/json"},body:obj3}
    fetch("http://localhost:3000/update",settings)
    // .then(response=>response.json())
    // .then(function(response))
    console.log(objbaza,index.value)
}

