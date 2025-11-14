let pestana = document.querySelector("head title");
let form = document.querySelector('.menu form');
let input = document.querySelector('input');
form.addEventListener('submit', function(e) {
  e.preventDefault(); 
  let valor = input.value; 
  if (valor.length === 0) {
    document.querySelector('header.alerta p').textContent = 'Por favor escribí algo antes de buscar ';
    document.querySelector('header.alerta').style.display = "flex";
    document.querySelector('header').style.marginBottom = "5px";
    
  }

  
  if (valor.length < 3) {
    document.querySelector('header.alerta p').textContent = 'Tu búsqueda debe constar de un mínimo de 3 caracteres.';
    document.querySelector('header.alerta').style.display = "flex";
    document.querySelector('header').style.marginBottom = "5px";
     
  }

  else{
  document.querySelector('header.alerta').style.display = "none"; 
  let valor = input.value; 
  window.location.href = "resultados_de_busqueda.html?busqueda=" + valor

  }
});

fetch('https://dummyjson.com/products?limit=194')
.then(function(response){
  return response.json();
})
.then(function(AllProducts){
 
  let productos = AllProducts.products;
  console.log(productos);

  
  let queryStringRB = location.search;
  console.log(queryStringRB);
  let queryStringRBObj = new URLSearchParams(queryStringRB);
  let Busqueda = queryStringRBObj.get("busqueda");
  console.log("Categoría elegida:", Busqueda);

  
  let contenidoBusqueda= document.querySelector("section.contenido");
  contenidoBusqueda.innerHTML = ""; 
    let hay = document.querySelector('section#hay.divisor');
    let noHay = document.querySelector('section#hay.divisor');
    let msj = document.querySelector('section#hay.divisor h2')
  
  for (i = 0; i < productos.length; i++) {
    if (Busqueda == productos[i].category) {
      contenidoBusqueda.innerHTML += `
        <article id="bu">
        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
        <h2>${productos[i].title}</h2>
        <p>${productos[i].description}</p>
         <a href="product.html?category=${productos[i].category}&name=${productos[i].title}&id=${productos[i].id}">Ver Más</a>

    </article> `;
    
    hay.style.display = "block";
      ;
  }
    else if (Busqueda == productos[i].title) {
      contenidoBusqueda.innerHTML += `
        <article id="bu">
        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
        <h2>${productos[i].title}</h2>
        <p>${productos[i].description}</p>
         <a href="product.html?category=${productos[i].category}&name=${productos[i].title}&id=${productos[i].id}">Ver Más</a>

    </article>`
    hay.style.display = "block";
    

  }
  else if (Busqueda==="") {

    noHay.style.display = "block";
  }

}

if (contenidoBusqueda.innerHTML === "") {
  contenidoBusqueda.innerHTML = `<h2>No hay resultados para el término: "${Busqueda}"</h2>`;
}
msj.textContent += ` "${Busqueda}"`

pestana.innerHTML = `Booked™ | "${Busqueda}"`
let links = document.querySelectorAll("#bu a");
  
    for (i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function() {
      this.style.color = "rgba(231, 177, 0, 0.8)";
      this.style.fontSize = "16px";
      this.style.fontWeight = "700";
      
    });
    links[i].addEventListener("mouseout", function() {
      this.style.color = "";
      this.style.fontSize = "";
      this.style.fontWeight = "";
    });
  }

})
  
