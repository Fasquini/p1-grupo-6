let form = document.querySelector('.menu form');
let input = document.getElementById('buscador');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  let valor = input.value; 

  if (valor.length === 0) {
    document.querySelector('header.alerta p').textContent = 'Por favor escribí algo antes de buscar ';
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
  localStorage.setItem('busqueda', valor); 
  window.location.href = 'catalogo.html'; 

  }
});

fetch('https://dummyjson.com/products?limit=194')
.then(function(response){
  return response.json();
})
.then(function(AllProducts){
  productos = AllProducts.products
  console.log(productos)
  let contenidoInicio = document.querySelector("section.alea");
  contenidoInicio.innerHTML = "";
  let contenidoMasComprados = document.querySelector("section.contenido");
  contenidoMasComprados.innerHTML="";

for(i=0;i<productos.length;i++){
    if(productos[i].category == "mens-watches"){
    contenidoInicio.innerHTML += `
    <article>
    
         <img src= ${productos[i].thumbnail} alt= ${productos[i].title}>
        <h2>${productos[i].title}</h2>
        <p>${productos[i].description}</p>
         <article class="precio"><a href=product.html?id=${productos[i].id}>Ver Más</a> <a href=""><p> $${productos[i].price} USD</p></a></article>
         </article>
      `;
    }
    if(productos[i].category == "mens-shoes"){
        contenidoMasComprados.innerHTML += `<article>
    
         <img src= ${productos[i].thumbnail} alt= ${productos[i].title}>
        <h2>${productos[i].title}</h2>
        <p>${productos[i].description}</p>
         <article class="precio"><a href=product.html?id=${productos[i].id}>Ver Más</a> <a href=""><p> $${productos[i].price} USD</p></a></article>
         </article>`
    }
    }

  });




   