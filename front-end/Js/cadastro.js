let userCadastrados = [
    {
        usuario: "usuario",
        senha: "senha"
    }
]

function cadastraUsuario(){

    let senha = document.getElementById("senha").value
    let confirmaSenha = document.getElementById("confirmaSenha").value


    if(senha == confirmaSenha){

    let novoUser = new Object();
    novoUser.usuario = document.getElementById("nomeUsuario").value
    novoUser.senha = document.getElementById("senha").value

    userCadastrados.push(novoUser)


    alert("Novo usuário cadastrado: "+"\nNick: "+novoUser.usuario+"\nSenha: "+novoUser.senha)
    }
    else{
        alert("Senhas não batem")
    }

    
}

function verificaLogin(){

    let usuario = document.getElementById("nomeUsuario").value
    let senha = document.getElementById("senha").value

    for(let i=0; i<userCadastrados.length; i++){

        if (usuario == userCadastrados[i].usuario && senha == userCadastrados[i].senha){
            alert("Login realizado")
        }else{
            alert("Dados incorretos")
        }
    }
    
}


function mostraCadastrados(){

    for(let i=0; i<userCadastrados.length; i++)
    alert("Usuarios: "+userCadastrados[i].usuario+"\nSenhas: "+userCadastrados[i].senha)
}