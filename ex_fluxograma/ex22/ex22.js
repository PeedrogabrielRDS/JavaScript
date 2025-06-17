function decisao(){
    var massa = window.document.getElementById('massa')
    var altura = window.document.getElementById('altura')
    var text1 = window.document.getElementById('text1')
    var text2 = window.document.getElementById('text2')

    let m = Number(massa.value)
    let a = Number(altura.value)
    imc = m / (a * a)

    text1.innerHTML = `Com base na sua altura ${a}m e massa ${m}Kg seu IMC (Índice de Massa Corporal) é igual a ${imc.toFixed(2)}.`
    if (imc < 18.5){
        text2.innerHTML = `Você está abaixo do peso`
    }else{
        if (imc >= 24.9){
            text2.innerHTML = `Você está acima do peso`
        }else{
            text2.innerHTML = `Você está no peso ideal`
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