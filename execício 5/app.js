function CalcularConverção(){

    let n1 = document.getElementById("metros").value

    let resultado = (parseFloat(n1) *100 )

    document.getElementById("centimetros").innerHTML = resultado

}