function Bilete1(parametru){
    window.location.href="http://localhost:3000/"+parametru;
     console.log("ok")
 }
function BiletInterval(){
    let xHTTP=new XMLHttpRequest()
    xHTTP.onreadystatechange=function(){
        if(xHTTP.readyState===4 && xHTTP.status===200){
            let obiect=JSON.parse(xHTTP.response)
            let listapreturi=Object.keys(obiect);
            let x= document.getElementById("template")

            x.innerText=""
            for(let i=0; i<listapreturi.length; i++){
                if(obiect[`${listapreturi[i]}`]>=350&&obiect[`${listapreturi[i]}`]<=450)
                     x.innerText+=listapreturi[i]+"\n";
            }
        }
    }
    xHTTP.open("GET","ajaxtext.TXT",true)
    xHTTP.send()
}

function PreturiMari(){
    let xHTTP=new XMLHttpRequest()
    xHTTP.onreadystatechange=function(){
        if(xHTTP.readyState===4 && xHTTP.status===200){
            let obiect=JSON.parse(xHTTP.response)
            let listapreturi=Object.keys(obiect);
            let x= document.getElementById("preturimari")
            x.innerText=""
                for(let i=0; i<obiect[`${listapreturi[listapreturi.length-1]}`].length; i++)
                     x.innerText+=obiect[`${listapreturi[listapreturi.length-1]}`][i]+"\n";
            }
        }
    
    xHTTP.open("GET","ajaxtext.TXT",true)
    xHTTP.send()
}

function ToatePreturile(){
    let xHTTP=new XMLHttpRequest()
    xHTTP.onreadystatechange=function(){
        if(xHTTP.readyState===4 && xHTTP.status===200){
            let obiect=JSON.parse(xHTTP.response)
            let listapreturi=Object.keys(obiect);
            let x= document.getElementById("toatepreturile")
            x.innerText=""
            for(let i=0; i<listapreturi.length; i++)
                if(obiect[`${listapreturi[i]}`]>=350&&obiect[`${listapreturi[i]}`]<=450)
                    obiect[`${listapreturi[listapreturi.length-1]}`].push(obiect[`${listapreturi[i]}`])
            for(let i=0; i<obiect[`${listapreturi[listapreturi.length-1]}`].length; i++)
                x.innerText+=obiect[`${listapreturi[listapreturi.length-1]}`][i]+"\n";
        }
    }
    xHTTP.open("GET","ajaxtext.TXT",true)
    xHTTP.send()
}