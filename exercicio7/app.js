function CalcularIdade(){

    let idade= document.getElementById("idade").value 
    if(idade>=18){

    document.getElementById("resposta").innerHTML = "Você pode dirigir"}

    else{

        document.getElementById("resposta").innerHTML= "Você não pode dirigir"}
    }