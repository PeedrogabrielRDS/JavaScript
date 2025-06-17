function decisao(){
    var velocidade = window.document.getElementById('velocidade')
    var text = window.document.getElementById('text')

    let v = Number(velocidade.value)

    if (v >= 60){
        text.innerHTML = `Você ultrapassou o limite de velocidade, Multado!`
    }else{
        text.innerHTML = `Você permaneceu dentro do limite, dirija sempre com cuidado.`
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