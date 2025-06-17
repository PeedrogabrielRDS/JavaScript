function calcular(){
    var numero1 = window.document.getElementById('numero1')
    var numero2 = window.document.getElementById('numero2')
    var somaText =window.document.getElementById('soma')
    var subtracaoText =window.document.getElementById('subtracao')
    var divisaoText =window.document.getElementById('divisao')
    var multiplicacaoText =window.document.getElementById('multiplicacao')

    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)

    soma = n1 + n2
    subtracao = n1 - n2
    divisao = n1 / n2
    multiplicacao = n1 * n2

    somaText.innerHTML = `soma: ${soma}`
    subtracaoText.innerHTML = `subtração: ${subtracao}`
    divisaoText.innerHTML = `divisão: ${divisao.toFixed(2)}`
    multiplicacaoText.innerHTML = `multiplicação: ${multiplicacao.toFixed(2)}`
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