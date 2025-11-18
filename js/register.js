let formulario = document.querySelector("#log form");

let inputEmail = document.querySelector('input[name="mailUsuario"]');
let inputContrasena = document.querySelector('input[name="contraseñaUsuario"]');
let inputContrasenaCheck = document.querySelector('input[name="contraseñaUsuarioCheck"]');
let checkbox = document.querySelector('input[name="t&c"]');

let mensajes = document.querySelectorAll('#log p');

let emailError = mensajes[0];
let passError = mensajes[1];
let passCheckError = mensajes[2];
let paisError = mensajes[3]; 
let termError = mensajes[4]; 

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    emailError.innerText = "";
    passError.innerText = "";
    passCheckError.innerText = "";
    termError.innerText = "";

    let email = inputEmail.value.trim();
    let pass = inputContrasena.value.trim();
    let passCheck = inputContrasenaCheck.value.trim();

    let errores = 0;

    if(email === ""){
        emailError.innerText = "El email es obligatorio";
        errores = errores + 1;
    }

    if(pass === ""){
        passError.innerText = "La contraseña es obligatoria";
        errores = errores + 1;
    } else {
        if(pass.length < 6){
            passError.innerText = "La contraseña debe tener al menos 6 caracteres";
            errores = errores + 1;
        }
    }

    if(passCheck === ""){
        passCheckError.innerText = "Repetir contraseña es obligatorio";
        errores = errores + 1;
    } else {
        if(pass !== passCheck){
            passCheckError.innerText = "Las contraseñas no coinciden";
            errores = errores + 1;
        }
    }

    if(!checkbox.checked){
        termError.innerText = "Tenés que aceptar los términos y condiciones";
        errores = errores + 1;
    }

    if(errores === 0){

        localStorage.setItem("emailUsuario", email);


        window.location.href = "login.html";
    }
});
