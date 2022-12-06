function Media(){

    let n1= parseFloat (document.getElementById("n1").value )
    let n2 = parseFloat (document.getElementById("n2").value)
    let n3= parseFloat (document.getElementById("n3").value)
    
    let media= (n1+n2+n3)/3
    

if(media>=7){

document.getElementById("resposta").innerHTML.value = "Aprovado parabéns"
}

else if(media>=5){

    document.getElementById("resposta").innerHTML.value = " Recuperação "}
}