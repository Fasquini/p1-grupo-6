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
  categoria = productos.category

  let contenidoCategorias = document.querySelector("section.categoria");
contenidoCategorias.innerHTML = "";
for(i=0;i<productos.length;i++){
    if(categoria == "mens-watches"){
  contenidoCategorias.innerHTML += `
        <article>
        <article class="reborde">
          <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
        </article>
          <h2>${productos[i].title}</h2>
          <p>${productos[i].description}</p>
          <p><span>Marca:</span> ${productos[i].brand}</p>
          <p><span>Precio:</span> $${productos[i].price}</p>
          <p><span>Stock:</span> ${productos[i].stock}</p>
          <p><span>Rating:</span> ${productos[i].rating}</p>
          <div class="category">
            <a href="product.html?id=${productos[i].id}">Ver más</a>
          </div>
        </article>
      `;
    }
    else{
        
    }
        
    }
  });




   