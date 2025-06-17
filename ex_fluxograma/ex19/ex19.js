function decisao(){
    var senha = window.document.getElementById('senha')
    var text = window.document.getElementById('text')

    let s = Number(senha.value)

    if (s == 1234){
        text.innerHTML = `Acesso Liberado!`
    }else{
        text.innerHTML = `Acesso Negado!`
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