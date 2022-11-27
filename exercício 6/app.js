function CalcularSalario(){

    let dinheiro = document.getElementById("dinheiro").value
    let hora = document.getElementById("hora").value

   let salario= parseFloat(dinheiro) * parseFloat(hora)

    document.getElementById("resposta").innerHTML = salario
}