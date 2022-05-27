function Bilete1(parametru){
   window.location.href="http://localhost:3000/"+parametru;
    console.log("ok")
}
let array
function Afisare(){
    fetch("http://localhost:3000/sendObject")
    .then((response)=>response.json())
    .then(function(response){
        let elem=document.getElementById("afisare1")
        let array=response
        let varrr=JSON.stringify(array).split("}").length-1
        elem.innerHTML="<h2>Here it's what we have:</h2>\n"
        // elem.innerHTML="<h3>Tickets:</h3>\n"
        for(let i=0; i<varrr; i++){
            let p=document.createElement("p")  
            p.innerHTML="<h4>Name for ticket "+(i+1)+" :</h4>"
            elem.append(p)
            elem.append(JSON.stringify(array[i].nume))
            let p1=document.createElement("p")  
            p1.innerHTML="<h4>Price for ticket "+(i+1)+" :</h4>"
            elem.append(p1)
            elem.append(JSON.stringify(array[i].price))
            let p2=document.createElement("p")  
            p2.innerHTML="<h4>Availability for ticket "+(i+1)+" :</h4>"
            elem.append(p2)
            elem.append(JSON.stringify(array[i].disponibilitate))
            elem.append(document.createElement('br'))
            elem.append(document.createElement('br'))
            elem.append(document.createElement('br'))

        }
        console.log(JSON.stringify(array).length)
    })
}




