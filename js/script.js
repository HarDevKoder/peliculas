// referencio los objetos a utilizar
const cajaEdad = document.getElementById("cajaEdad");
const peliculaRecomendada = document.getElementById("peliculaRecomendada");
const botonesCategorias = document.querySelector(".botonesCategorias");

// Variables Globales
let categoria;
let edad;
let recomendada;

// Detecto botón Presionado (Categorías)
botonesCategorias.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    edad = Number(cajaEdad.value);
    categoria = event.target.textContent;

    recomendada = (categoria === 'Comedia' && edad <13)?
                  'Back to the Future':
                  (categoria === 'Comedia' && edad <16)?
                  'The Thruman Show':
                  (categoria === 'Comedia' && edad >=16)?
                  'The Wolf of Wall Street':
                  (categoria === 'Musical' && edad <13)?
                  'La La Land':
                  (categoria === 'Musical' && edad <16)?
                  'Les Miserables':
                  (categoria === 'Musical' && edad >=16)?
                  'The Rocky Horror Picture Show':
                  (categoria === 'Crimen' && edad <13)?
                  'No Hay Opciones para esta Edad':
                  (categoria === 'Crimen' && edad <16)?
                  'El Secreto de tus Ojos':
                  (categoria === 'Crimen' && edad >=16)?
                  'The GodFather':
                  (categoria === 'Drama' && edad <13)?
                  'Casablanca':
                  (categoria === 'Drama' && edad <16)?
                  'The Shawshank Redemption':
                  (categoria === 'Drama' && edad >=16)?
                  'Taxi Driver':'Los Criterios son errados';
      
    peliculaRecomendada.textContent=recomendada;
    peliculaRecomendada.style.color='black'
  }
});
