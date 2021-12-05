document.body.style.background = "#aad"; 

var cont=0
var lista=[]
var soma=0

var contador=document.getElementById('contador')
var spamTotal=document.getElementById("somar")
var input=document.getElementById('numero')
var cor 

function adicionarIten(){
    if(input.value.length!==0){
        cont++
        lista.push(parseFloat(input.value))
        contador.innerHTML = cont
        input.value=''
        
    }
}

function somarTotal(){
    var controleDoLaço=0
    if(cont!==0){
        while(controleDoLaço<lista.length){
         soma+=lista[controleDoLaço]
         controleDoLaço++
        }
        spamTotal.innerHTML= soma.toFixed(2)

    }
}
