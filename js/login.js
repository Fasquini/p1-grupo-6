let formulario = document.querySelector('#log form');
let Uregistrados = localStorage.getItem("emailUsuario");
let Cregistradas = localStorage.getItem("contraseñaUsuario")

let mensajes = document.querySelectorAll('#log p');
let emailError = mensajes[0];
let contrasenaError = mensajes[1];

formulario.addEventListener('submit', function(e){

  e.preventDefault();

  emailError.innerText = "";
  contrasenaError.innerText = "";

let valorEmail = formulario.mailUsuario.value;
let valorContrasena = formulario.contraseñaUsuario.value;

  let cantidadErrores = 0;

  if (valorEmail === ""){
    emailError.innerText = "El email es obligatorio";
    cantidadErrores = cantidadErrores + 1;
  }
    else if (valorEmail !== Uregistrados){
   emailError.innerText = "El email ingresado no está registrado";
   cantidadErrores = cantidadErrores + 1;
 }

  if (valorContrasena === ""){
    contrasenaError.innerText = "La contraseña es obligatoria";
    cantidadErrores = cantidadErrores + 1;
  } 
  else if (valorContrasena.length < 6){
    contrasenaError.innerText = "La contraseña debe tener al menos 6 caracteres";
    cantidadErrores = cantidadErrores + 1;
  }
  else if(valorContrasena !== Cregistradas){
   contrasenaError.innerText = "La contraseña ingresada no está registrada";
   cantidadErrores = cantidadErrores + 1;
 }

  

  if (cantidadErrores === 0){

    localStorage.setItem('emailUsuario', valorEmail);

    window.location.href = 'index.html';
  }
});