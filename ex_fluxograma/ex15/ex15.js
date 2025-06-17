function decisao(){
    var notaAD = window.document.getElementById('notaAD')
    var notaAG = window.document.getElementById('notaAG')
    var notaIA = window.document.getElementById('notaIA')
    var text = window.document.getElementById('text')

    let nAD = Number(notaAD.value)
    let nAG = Number(notaAG.value)
    let nIA = Number(notaIA.value)

    media = (nAD + nAG + nIA) / 3

    if (media <= 4){
        text.innerHTML = `Você está reprovado.`
    }else{
        if (media >= 6){
            text.innerHTML = `Você está aprovado.`
        }else{
            text.innerHTML = `Você está de recuperação.`
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