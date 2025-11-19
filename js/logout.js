let botonLogout = document.querySelector("button.LogOut");

if (botonLogout) {
  botonLogout.addEventListener("click", function () {
    localStorage.removeItem("emailUsuario");
    localStorage.removeItem("contraseñaUsuario");


    botonLogout.style.display = "none";

    let loginLink = document.querySelector("#loginLink");
    let registerLink = document.querySelector("#registerLink");
    let textoBienvenida = document.querySelector("a.Bienvenida");

    if (textoBienvenida) {
      textoBienvenida.innerText = "";
    }

    if (loginLink) {
      loginLink.style.display = "block";
    }

    if (registerLink) {
      registerLink.style.display = "block";
    }

    window.location.href = "login.html";
  });
}
