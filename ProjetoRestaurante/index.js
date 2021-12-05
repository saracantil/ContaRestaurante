document.body.style.background = "#aad"; 

var cont=0
var lista=[]
var soma=0

var contador=document.getElementById('contador')
var spamTotal=document.getElementById("somar")
var input=document.getElementById('numero')
var cor 

function adicionarItem(){
    if(input.value.length!==0){
        cont = cont + 1
        lista.push(parseFloat(input.value))
        contador.innerHTML = cont
        input.value=''
        
    }
}

function total(){
    var repetir=0
    if(cont!==0){
        while(repetir<lista.length){
         soma+=lista[controleDoLaço]
         repetir = repetir + 1
        }
        spamTotal.innerHTML= soma.toFixed(2)

    }
}
