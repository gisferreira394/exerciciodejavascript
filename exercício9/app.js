function media() {

    let n1 = parseFloat(document.getElementById("n1").value)
    let n2 = parseFloat(document.getElementById("n2").value)
    let n3 = parseFloat(document.getElementById("n3").value)
    let n4 = parseFloat(document.getElementById("n4").value)

    let media = (n1 + n2 + n3 + n4) / 4


    if (media <= 4) {
        document.getElementById("resposta").innerHTML = "Reprovado" + media
    }else if (media == 5) {
        document.getElementById("resposta").innerHTML = " Recuperação" + media
    }else if(media >= 6){
        document.getElementById("resposta").innerHTML = " Aprovado parabéns" + media
    }
}