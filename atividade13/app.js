function CalcularIdade(){

    let idade= document.getElementById("idade").value 
    if(idade>=18){

    document.getElementById("resposta").innerHTML = "Você é maior de 18"}

    else{

        document.getElementById("resposta").innerHTML= "Você é menor de 18"}
    }