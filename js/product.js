let mostrarCategoria = document.querySelector("section.product h2")
let queryStringProd = location.search;
console.log(queryStringProd);
let queryStringProdObj = new URLSearchParams(queryStringProd);
let categoriaProducto = queryStringProdObj.get("category")

mostrarCategoria.innerHTML += ` - ${categoriaProducto}`