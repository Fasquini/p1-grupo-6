let formulario = document.querySelector("#log form");
let form = document.querySelectorAll("form input")
let inputEmail = form[1];
let inputContrasena = form[2];
let inputContraseñaChequeo = form[3];
let checkbox = form[7];

let mensajes = document.querySelectorAll('#log p');

let emailError = mensajes[0];   
let contraError = mensajes[1];
let contraChequeoError = mensajes[2];
let paisError = mensajes[3]; 
let tycError = mensajes[4]; 

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    emailError.innerText = " ";
    contraError.innerText = " ";
    contraChequeoError.innerText = " ";
    let email = inputEmail.value;
    let contra = inputContrasena.value;
    let contraChequeo = inputContraseñaChequeo.value;

    let errores = 0;

    if(email === ""){
        emailError.innerText = "El email es obligatorio";
        errores = errores + 1;
    }

    if(contra === ""){
        contraError.innerText = "La contraseña es obligatoria";
        errores = errores + 1;
    } else {
        if(contra.length < 6){
            contraError.innerText = "La contraseña debe tener al menos 6 caracteres";
            errores = errores + 1;
        }
    }

    if(contraChequeo === ""){
        contraChequeoError.innerText = "Repetir contraseña es obligatorio";
        errores = errores + 1;
    } 
    else {
        if(contra !== contraChequeo){
            contraChequeoError.innerText = "Las contraseñas no coinciden";
            errores = errores + 1;
        }
    }

    if(!checkbox.checked){
        tycError.innerText = "Tenés que aceptar los términos y condiciones";
        errores = errores + 1;
    }

    if(errores === 0){

        localStorage.setItem("emailUsuario", email);
        localStorage.setItem("contraseñaUsuario", contra);

        window.location.href = "login.html";
    }
});
