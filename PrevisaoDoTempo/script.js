const input = document.querySelector("#cidade");
const buscar = document.querySelector("#btn-busca");
const boxResultado = document.querySelector("#resultado");

const titulo = document.querySelector("#titulo-cidade");
const temp = document.querySelector("#temp");
const descricao = document.querySelector("#descricao");
const icone = document.querySelector("#icone");
const umidade = document.querySelector("#umidade");

const API_KEY = "d8c97356247746147424683506941197";

async function buscarCidade() {
  const cidade = input.value;
  if (cidade === "") {
    return;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&lang=pt_br&units=metric`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Errooooo");
    }

    const dados = await resposta.json();
    console.log(dados);
  } catch (error) {
    console.log(error);
  }
}

buscarCidade();
