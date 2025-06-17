function operacao(){
    var al = window.document.getElementById('altura')
    var cm = window.document.getElementById('comprimento')
    var lrg = window.document.getElementById('largura')
    var res = window.document.getElementById('volume')

    let a = Number(al.value)
    let c = Number(cm.value)
    let l = Number(lrg.value)
    v = a * c * l

    res.innerHTML = `O volume é igual a ${v} com base na altura ${a}, comprimento ${c} e largura ${l}.`

    console.log(a,c)
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