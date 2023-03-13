


function cadastro() {
    window.location.href = "cadastro.html";
}


function singIn(){
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "home.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}
const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    recuperarsenha: () => document.getElementById('recuperar-senha'),
    buttonlog: () => document.getElementById('login-button'),
    emailrequerido: () => document.getElementById('email-requerido'),
    emailinvalido: () => document.getElementById('email-invalido'),
    senharequerida: () => document.getElementById("senha-requerida")
}