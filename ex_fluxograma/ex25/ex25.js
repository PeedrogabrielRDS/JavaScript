function decisao(){
    var idade = window.document.getElementById('idade')
    var text = window.document.getElementById('text')

    let i = Number(idade.value)

    if (i <= 15){
        text.innerHTML = `Você é Jovem, aproveite!`
    }else{
        if (i >= 65){
            text.innerHTML = `Você é Idoso.`
        }else{
            text.innerHTML = `Você é Adulto.`
        }
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