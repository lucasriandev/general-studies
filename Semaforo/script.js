const cores = ["red", "yellow", "green"];
let indiceAtual = 0;

const luz = document.querySelector("#luz");
const botao = document.querySelector("#btn-mudar");

luz.style.background = cores[0];

botao.addEventListener("click", () => {
  indiceAtual++;

  if (indiceAtual >= cores.length) {
    indiceAtual = 0;
  }

  luz.style.background = cores[indiceAtual];
});
