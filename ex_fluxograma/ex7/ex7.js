function decisao(){
    var numero = window.document.getElementById('numero')
    var text = window.document.getElementById('text')

    let n = parseInt(numero.value)
    let sucessor = n + 1
    let antecessor = n - 1

    text.innerHTML = `O Sucessor de "${n}" é ${sucessor} e o Antecessor é ${antecessor}.`
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