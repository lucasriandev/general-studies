const perguntas = [
  {
    pergunta: "Qual é a capital da França?",
    alternativas: ["Londres", "Paris", "Berlim", "Madrid"],
    respostaCorreta: 1,
  },
  {
    pergunta: "Qual herói é bilionário?",
    alternativas: ["Superman", "Batman", "Flash", "Hulk"],
    respostaCorreta: 1,
  },
  {
    pergunta: "Quanto é 2 + 2?",
    alternativas: ["3", "5", "4", "22"],
    respostaCorreta: 2,
  },
];

let indiceAtual = 0;
let pontos = 0;

function carregarPergunta() {
  const carta = perguntas[indiceAtual];

  document.querySelector("#texto-pergunta").innerText = carta.pergunta;

  const botoes = document.querySelectorAll(".btn-opcao");

  botoes[0].innerText = carta.alternativas[0];
  botoes[1].innerText = carta.alternativas[1];
  botoes[2].innerText = carta.alternativas[2];
  botoes[3].innerText = carta.alternativas[3];
}

const resultado = document.querySelector("#resultado");

function verificarResposta(cliqueDoUsuario) {
  const carta = perguntas[indiceAtual];

  if (cliqueDoUsuario === carta.respostaCorreta) {
    pontos++;
    alert("Acertou!");
  } else {
    alert("Errou! A certa era: " + carta.alternativas[carta.respostaCorreta]);
  }

  indiceAtual++;

  if (indiceAtual < perguntas.length) {
    carregarPergunta();
  } else {
    resultado.innerHTML = `Você fez ${pontos} pontos!`;

    indiceAtual = 0;
    pontos = 0;
    carregarPergunta();
  }
}

carregarPergunta();
