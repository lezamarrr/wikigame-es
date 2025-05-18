
const startPages = ["Chocolate", "Perro", "Pablo_Picasso", "Fútbol", "Volcán"];
const endPages = ["Telescopio_espacial_Hubble", "Gabriel_García_Márquez", "Matemáticas", "Bicicleta", "Isla_de_Pascua"];

function startGame() {
  const start = startPages[Math.floor(Math.random() * startPages.length)];
  const end = endPages[Math.floor(Math.random() * endPages.length)];
  document.getElementById("startPage").textContent = start.replace(/_/g, " ");
  document.getElementById("endPage").textContent = end.replace(/_/g, " ");
  document.getElementById("wikiFrame").src = "https://es.wikipedia.org/wiki/" + start;
  document.getElementById("gameArea").style.display = "block";
}
