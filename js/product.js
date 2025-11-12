let form = document.querySelector('.menu form');
let input = document.querySelector('input');

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
  window.location.href = `resultados_de_busqueda.html?busqueda=${valor}`; 

  }
}); 





mostrarCategoria.textContent += ` - ${categoriaProducto}`;
fetch('https://dummyjson.com/products?limit=194')
.then(function(response){
  return response.json();
})
.then(function(AllProducts){
let idProducto = queryStringProdObj.get("id");
  let productos = AllProducts.products
  console.log(productos)
  let contenidoInicio = document.querySelector("section.product");
  
  contenidoInicio.innerHTML = "";
for(i=0;i<productos.length;i++){
    if(productos[i].id== idProducto ){
        contenidoInicio.innerHTML += `
            <h2></h2>   
    <article>
        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
        <h3>Descripción</h3>
        <p>${productos[i].description}</p>
        <h3>Marca</h3>
        <p>${productos[i].brand}</p>
        <h3>Precio</h3>
        <article class="valor">
        <a href="">$${productos[i].price}</a>
        </article>
        <p>(Consultar disponibilidad)</p>
        <h3>Categoría</h3>
        <p><a>${productos[i].category}</a></p>
        <h3>Stock</h3>
        <p>${productos[i].stock} u.</p>
    </article>
    `;
}
}})

