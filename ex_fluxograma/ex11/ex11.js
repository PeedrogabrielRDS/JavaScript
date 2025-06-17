function decisao(){
    var numero = window.document.getElementById('numero')
    var text = window.document.getElementById('text')

    let n = Number(numero.value)

    if (n % 2 == 0){
        text.innerHTML = `${n} é par.`
    }else{
        text.innerHTML = `${n} é impar.`
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