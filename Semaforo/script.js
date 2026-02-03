const cores = ["red", "yellow", "green"];
let indiceAtual = Number(localStorage.getItem("IndiceCor")) || 0;

const luz = document.querySelector("#luz");
const botao = document.querySelector("#btn-mudar");

luz.style.background = cores[indiceAtual];

botao.addEventListener("click", () => {
  indiceAtual++;

  if (indiceAtual >= cores.length) {
    indiceAtual = 0;
  }

  luz.style.background = cores[indiceAtual];

  localStorage.setItem("IndiceCor", indiceAtual);
});
