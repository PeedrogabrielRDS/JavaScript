
function troca(){
    var numero1 = window.document.getElementById('numero1')
    var numero2 = window.document.getElementById('numero2')

    let a = Number(numero1.value)
    let b = Number(numero2.value)
    let c = a

    var res = window.document.getElementById('res')

    var ab = b
    var ba = c

    res.innerHTML = `Após a troca o valor de "A" é igual a ${ab} e "B" é igual a ${ba}`
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