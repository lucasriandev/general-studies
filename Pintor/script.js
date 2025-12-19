const perguntas = [
  { texto: "Qual cor do céu?", alternativa: "azul" },
  { texto: "Quanto é 2 + 2", alternativa: "4" },
  { texto: "Quem descobriu o brasil?", alternativa: "Pedro Alvares Cabral" },
];

let indice = 0;

const h2 = document.querySelector("#pergunta");
const botao = document.querySelector("#btn-resposta");

function carregarPergunta() {
  const perguntaAtual = perguntas[indice];
  h2.innerHTML = perguntaAtual.texto;

  botao.innerText = perguntaAtual.alternativa;
}
carregarPergunta();

botao.addEventListener("click", () => {
  indice++;

  if (indice >= perguntas.length) {
    indice = 0;
  }

  carregarPergunta();
});
