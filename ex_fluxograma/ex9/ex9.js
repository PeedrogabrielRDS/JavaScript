function calcular(){
    var nome = window.document.getElementById('nome')
    var precoFabrica = window.document.getElementById('precoFabrica')
    var text = window.document.getElementById('text')

    let precoInicial = Number(precoFabrica.value)
    let n = String(nome.value)

    impostoFabrica = precoInicial * 0.45
    impostoRevendedor = precoInicial * 0.28
    valorFinal = precoInicial + impostoFabrica + impostoRevendedor

    text.innerHTML = `Com o acrécimo de R$${impostoFabrica.toFixed(2)} do imposto de fábrica e R$${impostoRevendedor.toFixed(2)} da porcentagem do revendedor, <br> o ${n} passa a possuir o valor final R$${valorFinal}.`
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