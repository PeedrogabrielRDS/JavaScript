function calcular(){
    var massa = window.document.getElementById('massa')
    var altura = window.document.getElementById('altura')
    var text = window.document.getElementById('text')

    let m = Number(massa.value)
    let a = Number(altura.value)
    let imc
    imc = m / (a * a)

    text.innerHTML = `Com base na sua altura ${a}m e massa ${m}Kg seu IMC (Índice de Massa Corporal) é igual a ${imc.toFixed(2)}.`
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