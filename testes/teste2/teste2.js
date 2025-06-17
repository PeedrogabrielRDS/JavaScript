function cad(){
    var nome = window.document.getElementById('nome')
    var email = window.document.getElementById('email')
    var senha = window.document.getElementById('senha')

    let name = String(nome.value)
    let eMail = String(email.value) 
    let password = String(senha.value) 

    let inf_nome = window.document.getElementById('txtnome')
    let inf_email = window.document.getElementById('txtemail')
    let inf_senha = window.document.getElementById('txtsenha')

    inf_nome.innerHTML = `nome: ${name}`
    inf_email.innerHTML = `E-mail: ${eMail}`
    inf_senha.innerHTML = `Senha: ${password}`
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