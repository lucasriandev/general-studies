const input = document.querySelector("#busca");
const botao = document.querySelector("#btn-buscar");
const container = document.querySelector("#container-cards");

async function carregarAPI() {
  const termo = input.value.toLowerCase();
  try {
    const resposta = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${termo}`
    );
    if (!resposta.ok) {
      throw new Error("Errooooo");
    }
    const dados = await resposta.json();
    console.log(dados);
    const listas = dados.results;
    console.log(listas);

    container.innerHTML = "";

    listas.forEach((item) => {
      container.innerHTML += `<div class="card">
            <img src="${item.image}">
            <h3>${item.name}</h3>
            <p>${item.status}</p>
            </div>`;
    });
    input.value = "";
  } catch (error) {
    console.log(error);
  }
}

botao.addEventListener("click", carregarAPI);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    carregarAPI();
  }
});
