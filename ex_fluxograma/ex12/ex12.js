function decisao(){
    var idade = window.document.getElementById('idade')
    var text = window.document.getElementById('text')

    let i = Number(idade.value)

    if (i >= 16){
        text.innerHTML = `Pode votar`
    }else{
        text.innerText = `Não pode votar ainda`
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