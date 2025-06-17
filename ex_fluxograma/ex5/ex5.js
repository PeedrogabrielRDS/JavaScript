function calcular(){
    var aValue = window.document.getElementById('aValue')
    var bValue = window.document.getElementById('bValue')
    var cValue = window.document.getElementById('cValue')
    var text = window.document.getElementById('text')

    let a = Number(aValue.value)
    let b = Number(bValue.value)
    let c = Number(cValue.value)
    res = (a + b + c)**2

    text.innerHTML = `Após efetuar o cálculo, (a+b+c)**2, com os valores ${a}, ${b} e ${c} temos o resultado ${res}`
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