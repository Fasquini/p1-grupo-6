let form = document.querySelector('.menu form');
let input = document.querySelector('input');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  let valor = input.value; 

  if (valor.length === 0) {
    document.querySelector('header.alerta p').textContent = 'Por favor escribí algo antes de buscar. ';
    document.querySelector('header.alerta').style.display = "flex";
    document.querySelector('header').style.marginBottom = "5px";
    return; 
  }

  
  if (valor.length < 3) {
    document.querySelector('header.alerta p').textContent = 'Tu búsqueda debe constar de un mínimo de 3 caracteres.';
    document.querySelector('header.alerta').style.display = "flex";
    document.querySelector('header').style.marginBottom = "5px";
    return;     
  }

  else{
  document.querySelector('header.alerta').style.display = "none"; 
  window.location.href = `resultados_de_busqueda.html?busqueda=${valor}`; 

  }
});
let logYReg = document.querySelectorAll("article.logr a")
for (i=0;i<logYReg.length;i++){
logYReg[i].addEventListener("mouseover", function() {
      this.style.color = "rgba(231, 177, 0, 0.8)";
      this.style.fontSize = "17px";
      this.style.fontWeight = "700";
      
    });
  logYReg[i].addEventListener("mouseout", function() {
      this.style.color = "";
      this.style.fontSize = "";
      this.style.fontWeight = "";
    });
}

fetch('https://dummyjson.com/products?limit=194')
.then(function(response){
  return response.json();
})
.then(function(AllProducts){
  productos = AllProducts.products
  console.log(productos)
  let contenidoInicio = document.querySelector("section.alea");
  contenidoInicio.innerHTML = "";
  let contenidoMasComprados = document.querySelector("section.masV");
  contenidoMasComprados.innerHTML="";

let destacado = document.querySelector(".aleatorio")
  destacado.innerHTML =``;
for(i=0;i<productos.length;i++){
    if(productos[i].category == "mens-watches"){
    destacado.innerHTML = `<article>
    <h1>Recomendados</h1>
    <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
    <h2>${productos[i].title}</h2>
    <p>${productos[i].description}</p>
    <a class = "prods" href="product.html?category=${productos[i].category}&name=${productos[i].title}&id=${productos[i].id}">Ver Más</a>
</article>`
    contenidoInicio.innerHTML += `
    <article>
    
         <img src= ${productos[i].thumbnail} alt= ${productos[i].title}>
        <h2>${productos[i].title}</h2>
        <p>${productos[i].description}</p>
         <article class="precio"><a class = "prods" href="product.html?category=${productos[i].category}&name=${productos[i].title}&id=${productos[i].id}">Ver Más</a> <a href=""><p> $${productos[i].price} USD</p></a></article>
         </article>
      `;
    }
    if(productos[i].category == "mens-shoes"){
        contenidoMasComprados.innerHTML += `<article>
    
         <img src= ${productos[i].thumbnail} alt= ${productos[i].title}>
        <h2>${productos[i].title}</h2>
        <p>${productos[i].description}</p>
         <article class="precio"><a class = "prods" href="product.html?category=${productos[i].category}&name=${productos[i].title}&id=${productos[i].id}">Ver Más</a> <a href="product.html?category=${productos[i].category}id=${productos[i].id}"><p> $${productos[i].price} USD</p></a>
         </article>`
          
    }
    }
  
    let links = document.querySelectorAll(".precio a.prods");
    for (i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function() {
      this.style.color = "rgba(231, 177, 0, 0.8)";
      this.style.fontSize = "19px";
      this.style.fontWeight = "700";
      
    });
    links[i].addEventListener("mouseout", function() {
      this.style.color = "";
      this.style.fontSize = "";
      this.style.fontWeight = "";
    });
  }
  let categs = document.querySelectorAll("aside ul li a");
  for (i = 0; i < categs.length; i++) {
    categs[i].addEventListener("mouseover", function() {
      this.style.color = "rgba(231, 177, 0, 0.8)";
      this.style.fontSize = "30px";
      this.style.fontWeight = "700";
      
    });
    categs[i].addEventListener("mouseout", function() {
      this.style.color = "";
      this.style.fontSize = "";
      this.style.fontWeight = "";
    });
  }
});

fetch('https://dummyjson.com/products/search?q='+ Busqueda)
.then(function(response){
  return response.json();
})
.then(function(AllProducts){
 
  let productos = AllProducts.products;
  console.log(productos);

  let hay = document.querySelector('section#hay.divisor');
    let msj = document.querySelector('section#hay.divisor h2')
  let noHay = document.querySelector('section#hay.divisor');
  msj.innerHTML = `No se encontraron resultados para `
  msj.style.display = "block"
  noHay.style.display = "block"
  let contenidoBusqueda= document.querySelector("section.contenido");
if (contenidoBusqueda.innerHTML === "") {
  noHay.style.display = "block"
}
else{
  for (i = 0; i < productos.length; i++) {
      contenidoBusqueda.innerHTML += `
        <article id="bu">
        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
        <h2>${productos[i].title}</h2>
        <p>${productos[i].description}</p>
        <a href="product.html?category=${productos[i].category}&name=${productos[i].title}&id=${productos[i].id}">Ver Más</a>

    </article> `;
  msj.innerHTML = `Se muestran resultados para `
      ;
  }
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




   