function decisao(){
    var idade = window.document.getElementById('idade')
    var text = window.document.getElementById('text')

    let i = Number(idade.value)

    if (i <= 12){
        text.innerHTML = `Você paga somante Meia Entrada`
    }else{
        text.innerHTML = `Você paga uma Entrada Inteira`
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