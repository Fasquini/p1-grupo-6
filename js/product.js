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





let pestana = document.querySelector("head title")
fetch('https://dummyjson.com/products?limit=194')
.then(function(response){
  return response.json();
})
.then(function(AllProducts){
  let queryStringRB = location.search;
  let queryStringProdObj = new URLSearchParams(queryStringRB);
let idProducto = queryStringProdObj.get("id");
  let productos = AllProducts.products
  let pestana = document.querySelector("head title")
  
  console.log(queryStringRB);
  let contenidoInicio = document.querySelector("main");
   let nombre = queryStringProdObj.get("name");
  contenidoInicio.innerHTML = "";
for(i=0;i<productos.length;i++){
    if(productos[i].id== idProducto ){
      let PreProd = productos[i].price
      let PrecioCDesc= (PreProd)-((productos[i].discountPercentage/100)* (PreProd))
        contenidoInicio.innerHTML += `
            <section class="fotoProducto"><img src="${productos[i].thumbnail}" alt="${productos[i].title}" class="foto"></section>

  <section class="datosProducto">

    <h1 class="nombreProducto">${productos[i].title}</h1>
      <p class = "info Imp">${productos[i].availabilityStatus} - ${productos[i].shippingInformation }</p>
    <div class="cajaPrecio">
      <article><p class="precio VM">$${productos[i].price} </p> <p class = "descuento">  ¡%${productos[i].discountPercentage} Off!</p> </article>
      <p class="precioFinal">Ahora: $${PrecioCDesc}</p>
     
    </div>
    <p class="descripcion">
      ${productos[i].description}
    </p>

    <h2 class="info">Marca</h2>
    <p>${productos[i].brand}</p>

    <h2 class="info">Categoría</h2>
    <p><a href="category.html?category=${productos[i].category}" class="categ">${productos[i].category}</a></p>

    <h2 class="info">Stock</h2>
    <p>${productos[i].stock} u.</p>

    <h2 class="info">Tags</h2>
    <p class="tags">
  <li>#${productos[i].tags[0]}</li>
  <li>#${productos[i].tags[1]}</li>
    </p>

  </section>

  <section class = "rev"> 
  <h3>Reviews</h3>
        <article class="comment">   
        <h4>${productos[i].reviews[0].reviewerName} - ${productos[i].reviews[0].rating} ⭐️</h4>
        <p>"${productos[i].reviews[0].comment}"</p>
        <h6>${productos[i].reviews[0].date}</h6>
        </article>
        <article class="comment">
        <h4>${productos[i].reviews[1].reviewerName} - ${productos[i].reviews[1].rating} ⭐️</h4>
        <p>"${productos[i].reviews[1].comment}"</p>
        <h6>${productos[i].reviews[1].date}</h6>
        </article>
        <article class="comment">
        <h4>${productos[i].reviews[2].reviewerName} - ${productos[i].reviews[2].rating} ⭐️</h4>
        <p>"${productos[i].reviews[2].comment}"</p>
        <h6>${productos[i].reviews[2].date}</h6>
        </article>
  </section>

    `;
}
pestana.innerHTML = `Booked™ | ${nombre}`
}})

