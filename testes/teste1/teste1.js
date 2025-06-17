function soma(){
    var n = window.document.getElementById('txt_1')
    var i = window.document.getElementById('txt_2')
    var res = window.document.getElementById('resultado')

    let idade = Number(i.value)
    let nome = String(n.value)

    res.innerHTML = `Nome: ${nome}<br> Idade: ${idade}`
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