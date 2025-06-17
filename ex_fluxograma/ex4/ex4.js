function converter(){
    var quantidade_moeda = window.document.getElementById('quantidade_moeda')
    var cotacao = window.document.getElementById('cotacao')
    var txt = window.document.getElementById('res')

    let q = Number(quantidade_moeda.value)
    let c = Number(cotacao.value)
    res = q * c

    txt.innerHTML = `US$${q} equivalem a R$${res.toFixed(2)}.`
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