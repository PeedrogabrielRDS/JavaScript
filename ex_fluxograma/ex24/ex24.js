function decisao(){
    var ano = window.document.getElementById('ano')
    var text = window.document.getElementById('text')

    let a = Number(ano.value)

    if (a < 0){
        text.innerHTML = `O ano ${a} não é válido ou não faz sentido.`
    }else{
        if (a % 400 == 0 || a % 4 == 0 && a % 4 == 0){
            text.innerHTML = `O ano ${a} é Bissexto`
        }else{
            text.innerHTML = `O ano ${a} é comum`
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