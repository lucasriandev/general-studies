const imagem = document.querySelector("#foto-destaque");
const moldura = document.querySelector(".moldura");

const listaFotos = [
  "https://wallpaperaccess.com/full/39046.jpg",
  "https://images5.alphacoders.com/587/587597.jpg",
  "https://images8.alphacoders.com/545/545905.jpg",
];

let indice = 0;
let intervalo;

function mudarFoto() {
  indice++;

  if (indice >= listaFotos.length) {
    indice = 0;
  }

  imagem.src = listaFotos[indice];
}

function iniciarCarrosel() {
  imagem.src = listaFotos[indice];

  intervalo = setInterval(mudarFoto, 2000);
}

function pararCarrosel() {
  clearInterval(intervalo);
  console.log("Pausado");
}

iniciarCarrosel();
moldura.addEventListener("mouseover", pararCarrosel);

moldura.addEventListener("mouseout", () => {
  iniciarCarrosel();
});
