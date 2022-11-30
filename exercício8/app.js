function Media(){

let n1= parseFloat (document.getElementById("n1").value )
let n2 = parseFloat (document.getElementById("n2").value)
let n3= parseFloat (document.getElementById("n3").value)

let media= (n1+n2+n3)/3

if(media>=6){

document.getElementById("resposta").innerHTML = "Você passou !!!, sua média foi de: " + media}

else{

document.getElementById("resposta").innerHTML= "Você está reprovado, sua média foi de: " + media 

}
}