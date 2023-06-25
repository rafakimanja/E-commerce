const userCadastrados = JSON.parse(localStorage.getItem("users"))

document.getElementById("botao-logar").addEventListener("click", verificaLogin)

function verificaLogin(){
    let usuario = document.getElementById("nomeUsuario").value
    let senha = document.getElementById("senha").value

    let isValidLogin = false

    if (userCadastrados != null) {
        userCadastrados.forEach(user => {
            if (user.usuario == usuario && user.senha == senha) {
                isValidLogin = true
            }
        })

        const usersCadastrados = userCadastrados.reduce((users, { usuario }) => {
            return users = [...users, usuario]
        }, [])

        if (isValidLogin) {
            alert("Login realizado")
        } else if (!isValidLogin && !usersCadastrados.includes(usuario)) {
            alert("Usuario não cadastrado")
        } else {
            alert("Dados incorretos")
        }
    }
}