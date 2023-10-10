// referencio los objetos a utilizar
const cajaEdad = document.getElementById('cajaEdad');
const peliculaRecomendada = document.getElementById('peliculaRecomendada');
const botonesCategorias=document.querySelector('.botonesCategorias');

// Variables Globales
let categoria;

// Detecto botón Presionado (Categorías)
botonesCategorias.addEventListener('click',(event)=>{
  if(event.target.tagName === 'BUTTON'){
    categoria = event.target.textContent;
    peliculaRecomendada.textContent=categoria;
  }
})