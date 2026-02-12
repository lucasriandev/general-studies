const input = document.querySelector("#cidade");
const buscar = document.querySelector("#btn-busca");
const boxResultado = document.querySelector("#resultado");

const titulo = document.querySelector("#titulo-cidade");
const temp = document.querySelector("#temp");
const descricao = document.querySelector("#descricao");
const icone = document.querySelector("#icone");
const umidade = document.querySelector("#umidade");

const API_KEY = "9c4ec1694b42bc83269ee5908a7cbe21";

async function buscarCidade() {
  const cidade = input.value;
  if (cidade === "") return;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&lang=pt_br&units=metric`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Errooooo");
    }

    const dados = await resposta.json();
    console.log(dados);

    if (dados === "404") {
      alert("Cidade não encontrada");
      return;
    }

    titulo.innerText = dados.name;
    temp.innerText = Math.floor(dados.main.temp) + "°C";
    descricao.innerText = dados.weather[0].description;
    umidade.innerText = dados.main.humidity;
    icone.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;

    boxResultado.style.display = "bloxk";
  } catch (error) {
    console.log(error);
  } finally {
    document.body.style.cursor = "default";
  }
}

buscar.addEventListener("click", buscarCidade);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    buscar.click();
  }
});
