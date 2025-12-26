const input = document.querySelector("#valor-real");
const spanDolar = document.querySelector("#res-dolar");
const spanEuro = document.querySelector("#res-euro");
const botao = document.querySelector("#btn-converter");

async function api() {
  try {
    const resposta = await fetch(
      "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL"
    );

    if (!resposta.ok) {
      throw new Error("errooo");
    }

    const dados = await resposta.json();
    console.log(dados);

    const valorEmReais = input.value;

    const precoDolar = dados.USDBRL.bid;
    const precoEuro = dados.EURBRL.bid;

    const totalDolar = valorEmReais / precoDolar;
    const totalEuro = valorEmReais / precoEuro;

    spanDolar.innerText = "$" + totalDolar.toFixed(2);
    spanEuro.innerText = "$" + totalEuro.toFixed(2);

    input.value = "";
  } catch (error) {
    console.log(error);
  }
}

botao.addEventListener("click", api);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    api();
  }
});
