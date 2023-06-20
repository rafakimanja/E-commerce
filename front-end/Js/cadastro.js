document.getElementById("botao-cadastrar").addEventListener("click", cadastraUsuario);

function cadastraUsuario(){
    let senha = document.getElementById("senha").value
    let confirmaSenha = document.getElementById("confirmaSenha").value

    if(senha == confirmaSenha){
        let novoUser = new Object()
        novoUser.usuario = document.getElementById("nomeUsuario").value
        novoUser.senha = document.getElementById("senha").value
        
        let users = localStorage.getItem("users")
        let usersArr = JSON.parse(users)

        if (usersArr == null) {
            usersArr = []
        }

        usersArr.push(novoUser)
        localStorage.setItem("users", JSON.stringify(usersArr))

        alert("Novo usuário cadastrado: "+"\nNick: "+novoUser.usuario+"\nSenha: "+novoUser.senha)
    } else{
        alert("Senhas não batem")
    }
}

function mostraCadastrados(){
    for(let i=0; i<userCadastrados.length; i++)
    alert("Usuarios: "+userCadastrados[i].usuario+"\nSenhas: "+userCadastrados[i].senha)
}