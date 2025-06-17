function calcular(){
    var rpg = window.document.getElementById('rpg')
    var quantidadeRacao = window.document.getElementById('quantidadeRacao')
    var text = window.document.getElementById('text')

    let qr_kg = Number(quantidadeRacao.value)
    let racaoGato = Number(rpg.value)

    qr_gr = qr_kg * 1000
    gatos = racaoGato * 2
    restoRacao = qr_gr - (gatos * 5)

    text.innerHTML = `Os gatos consomem diariamente ${gatos}g, após 5 dias restará ${restoRacao}g de ração.`
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