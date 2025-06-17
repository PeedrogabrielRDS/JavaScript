function decisao(){
    var numero1 = window.document.getElementById('numero1')
    var numero2 = window.document.getElementById('numero2')
    var text = window.document.getElementById('text')

    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)

    if (n1 > n2){
        text.innerHTML = `Número ${n1} é maior que ${n2}.`
    }else{
        text.innerHTML = `Número ${n2} é maior que ${n1}.`
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