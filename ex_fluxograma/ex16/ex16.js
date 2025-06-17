function calcular(){
    var vendas = window.document.getElementById('vendas')
    var salario = window.document.getElementById('salario')
    var text = window.document.getElementById('text')

    let v = Number(vendas.value)
    let s = Number(salario.value)

    bonus = s * 1.2

    if (v > 50){
        text.innerHTML = `Você fez mais de 50 vendas! <br> Seu salário recebeu um bônus de 20%, passando a ser de R$${bonus}.`
    }else{
        text.innerHTML = `Seu salário se mantém no valor de R$${s}.`
    }
}
function horas(){
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    var horario = window.document.getElementById('horario')
    
    horario.innerHTML = `${hora}:${minutos}:${segundos}`
}
setInterval(horas, 100)