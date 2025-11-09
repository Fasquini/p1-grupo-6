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
          <p><span>Precio:</span> $${productos[i].price}</p>
          <p><span>Stock:</span> ${productos[i].stock}</p>
          <p><span>Rating:</span> ${productos[i].rating}</p>
          <div class="category">
            <a href="product.html?id=${productos[i].id}">Ver más</a>
          </div>
        </article>
      `;
     destacado.innerHTML = `
     <article>
     <img src=${productos[i].thumbnail} alt="${productos[i].title}">
        <h2>${productos[i].title}</h2>
        <p>${productos[i].description}</p>
         <article class="precio"><a href= product.html?id=${productos[i].id}  >Ver Más</a> </article>
    </article>`
    }
  }

  
  if (contenidoCategorias.innerHTML === "") {
    contenidoCategorias.innerHTML = "<p>No se encontraron productos en esta categoría.</p>";
  }
})
