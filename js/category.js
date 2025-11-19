let pestana = document.querySelector("head title");
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




fetch('https://dummyjson.com/products?limit=194')
.then(function(response){
  return response.json();
})
.then(function(AllProducts){
 
  let productos = AllProducts.products;
  console.log(productos);

  
  let queryString = location.search;
  console.log(queryString);
  let queryStringObj = new URLSearchParams(queryString);
  let Categoria = queryStringObj.get("category");
  console.log("Categoría elegida:", Categoria);

  let titulo = document.querySelector("section#cat.divisor h1")
  let destacado = document.querySelector("section#cat.aleatorio")
  let contenidoCategorias = document.querySelector("section.categoria");
  titulo.innerHTML = `${Categoria}`;
  titulo.style.textTransform = "capitalize"
  destacado.innerHTML = "";
  contenidoCategorias.innerHTML = ""; 

  
  for (i = 0; i < productos.length; i++) {
    if (Categoria == productos[i].category) {
      contenidoCategorias.innerHTML += `
        <article>
  <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
  <h2>${productos[i].title}</h2>
  <p>${productos[i].description}</p>
  <p><span>Marca:</span> ${productos[i].brand}</p>
  <p><span>Stock:</span> ${productos[i].stock} u.</p>
  <p><span>Rating:</span> ${productos[i].rating}  ⭐</p>
  <div>
    <article class="precio"><a href= "product.html?category=${productos[i].category}&name=${productos[i].title}&id=${productos[i].id}"  >Ver Más</a> </article>
    <span class ="precio">$${productos[i].price} USD</span>
  </div>
</article> `
      ;
     destacado.innerHTML = `
     <article>
     <img src=${productos[i].thumbnail} alt="${productos[i].title}">
     <article>
        <h2>${productos[i].title}</h2>
        <p>${productos[i].description}</p>
         <article class="precio"><a href= "product.html?category=${productos[i].category}&name=${productos[i].title}&id=${productos[i].id}" >Ver Más</a> </article>
         </article>
    </article>`
    }
    pestana.innerHTML = `Booked™ | ${Categoria}`
  }

  
  if (contenidoCategorias.innerHTML === "") {
    contenidoCategorias.innerHTML = "<p>No se encontraron productos en esta categoría.</p>";
  }
  let links = document.querySelectorAll(".precio a");
    for (i = 0; i < links.length; i++) {
    links[i+1].addEventListener("mouseover", function() {
      this.style.color = "rgba(231, 177, 0, 0.8)";
      this.style.fontSize = "19px";
      this.style.fontWeight = "700";
    });
    links[i+1].addEventListener("mouseout", function() {
      this.style.color = "";
      this.style.fontSize = "";
      this.style.fontWeight = "";
    });
  }
})

