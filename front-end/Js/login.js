const userCadastrados = JSON.parse(localStorage.getItem("users"))

document.getElementById("botao-logar").addEventListener("click", verificaLogin)

function verificaLogin(){
    let usuario = document.getElementById("nomeUsuario").value
    let senha = document.getElementById("senha").value

    if (userCadastrados != null) {
        for (let i=0; i<userCadastrados.length; i++) {
            if (usuario == userCadastrados[i].usuario && senha == userCadastrados[i].senha) {
                alert("Login realizado")
            } else {
                alert("Dados incorretos")
            }
        }
    } else {
        alert("Dados incorretos")
    }
}