function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (email != null && nome != null) {
        console.log("usuario autenticado")
    } else {
        window.location = "../login.html";
    }
}

function validarSessao2() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (email != null && nome != null) {
        console.log("usuario autenticado")
    } else {
        window.location = "./login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function limparSessao2() {
    sessionStorage.clear();
    window.location = "./login.html";
}