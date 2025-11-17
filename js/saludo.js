let usuarioGuardado = localStorage.getItem("emailUsuario");

let loginLink = document.getElementById("login-link");
let registerLink = document.getElementById("register-link");
let headerRight = document.getElementById("header-right");

if (usuarioGuardado !== null) {

    if (loginLink) {
        loginLink.style.display = "none";
    }

    if (registerLink) {
        registerLink.style.display = "none";
    }

    let textoBienvenida = document.createElement("p");
    textoBienvenida.innerText = "Bienvenido: " + usuarioGuardado;
    textoBienvenida.style.marginRight = "15px";

    let botonLogout = document.createElement("button");
    botonLogout.innerText = "Logout";

    botonLogout.addEventListener("click", function() {
        localStorage.removeItem("emailUsuario");
        window.location.href = "login.html";
    });

    if (headerRight) {
        headerRight.appendChild(textoBienvenida);
        headerRight.appendChild(botonLogout);
    }
}
