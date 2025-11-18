let usuarioGuardado = localStorage.getItem("emailUsuario");

let loginLink = document.querySelector("#loginLink");
let registerLink = document.querySelector("#registerLink");
let headerRight = document.querySelector("#header");
let distancia = document.querySelector("#header .logr")
let buscador = document.querySelector("article.indice")
if (usuarioGuardado !== null) {
    

    loginLink.style.display = "none";
    headerRight.style.display = "flex"
    registerLink.style.display = "none";

    let textoBienvenida = document.querySelector("a.Bienvenida");
    textoBienvenida.innerText = "¡Bienvenido " + usuarioGuardado + "!";
    textoBienvenida.style.marginRight = "15px";

    let botonLogout = document.querySelector("button.LogOut");
    botonLogout.innerHTML = "Logout";
    botonLogout.style.display = "block"
    
    
    let perfil = document.querySelector("a.perfil")
    
    perfil.innerHTML = '<img src="img/Perfil.png">'
    perfil.style.height = "fit-content"
    perfil.style.alignSelf = "center"
    
    let perfilE = document.querySelector("a.perfil img")
    perfilE.style.width = "40px"
    perfilE.style.height = "40px"

    botonLogout.addEventListener("click", function() {
        localStorage.removeItem("emailUsuario");
        window.location.href = "login.html";

    });

}
