function login() {
    window.location.href = "index.html";
}

function criar(){

    const email = form.email().value;

    const password = form.password().value;

    
    firebase.auth().createUserWithEmailAndPassword(email, password

    ).then(() => {


        window.location.href = "home.html";
    }).catch(error => {

        alert(getErrorMessage(error));

    })
    alert (getErrorMessage(error));
}
const form = {

   

    senhamath: () => document.getElementById('senha-match'),

    email: () => document.getElementById('email'),

    emailinvalid: () => document.getElementById('email-invalido'),

    emailrequerido: () => document.getElementById('email-requerido'),

    password: () => document.getElementById('password'),

    senharequerida: () => document.getElementById('senha-requerida'),

    numerosenha: () => document.getElementById('senha-length'),

    buttonreg: () => document.getElementById('registro-button')
}