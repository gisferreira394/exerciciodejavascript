function Media(){

let n1 = document.getElementById("n1").innerHTML.value
let n2 = document.getElementById("n2").innerHTML.value
let n3 = document.getElementById("n3").innerHTML.value

let media= parseFloat(n1) + parseFloat(n2) + parseFloat(n3)/3

if(media>=7){

document.getElementById("resposta").innerHTML.value = "Aprovado parabéns"
}

else(media>=5){

    document.getElementById("resposta").innerHTML.value = " Recuperação "}
}

if else (media <=4){

    document.getElementById("resposta").innerHTML.value = " Reprovado "
}