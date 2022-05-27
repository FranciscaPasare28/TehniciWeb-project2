function Bilete1(parametru){
    window.location.href="http://localhost:3000/"+parametru;
     console.log("ok")
 }

 function Informatii1(){
    let index=document.getElementById("index")
    let obj3={'index2':index.value}
    obj3=JSON.stringify(obj3)
    let settings={method:"DELETE",headers:{"Content-Type":"application/json"},body:obj3}
    fetch("http://localhost:3000/delete",settings)
 }