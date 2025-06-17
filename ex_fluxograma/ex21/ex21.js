function decisao(){
    var lado1 = window.document.getElementById("lado1")
    var lado2 = window.document.getElementById("lado2")
    var lado3 = window.document.getElementById("lado3")
    var text = window.document.getElementById("text")

    let l1 = Number(lado1.value)
    let l2 = Number(lado2.value)
    let l3= Number(lado3.value)

    if (l1 == l2 && l2 == l3 && l1 == l3){
        text.innerHTML = `O triângulo é Equilátero.`
    }else{
        if (l1 != l2 && l2 != l3 && l1 != l3){
            text.innerHTML = `O triângulo é Escaleno.`
        }else{
            text.innerHTML = `O triângulo é Isóceles.`
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