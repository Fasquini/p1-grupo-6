let form = document.querySelector('.menu form');
let input = document.getElementById('buscador');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  let valor = input.value.trim(); 

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