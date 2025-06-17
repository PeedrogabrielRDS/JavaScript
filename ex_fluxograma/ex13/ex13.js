function decisao(){
    var valor = window.document.getElementById('valor')
    var text = window.document.getElementById('text')

    let v = Number(valor.value)
    let desconto1 = v * 0.1
    let desconto2 = v * 0.05

    let valorDesconto1 = v - desconto1
    let valorDesconto2 = v - desconto2

    if (v > 1000){
        text.innerHTML = `Com o aplique de R$${desconto1} de desconto o valor do produto cai pra R$${valorDesconto1}.`
    }else{
        text.innerHTML = `Com o aplique de R$${desconto2} de desconto o valor do produto cai pra R$${valorDesconto2}.`
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