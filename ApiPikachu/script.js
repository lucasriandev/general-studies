const input = document.querySelector("#busca");
const botao = document.querySelector("#btn-buscar");

let imagem = document.querySelector("img");
let nome1 = document.querySelector("#poke-name");
let tipo = document.querySelector(".info");

async function carregarPokemon() {
  const nome = input.value.toLowerCase();

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

    if (!resposta.ok) {
      throw new Error("Algum erro em trazer api");
    }

    const dados = await resposta.json();

    imagem.src = dados.sprites.front_default;
    nome1.innerText = dados.name;
    tipo.innerText = dados.types[0].type.name;

    input.value = "";
  } catch (error) {
    console.log("Ops deu erro", error);
  }
}

botao.addEventListener("click", carregarPokemon);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    carregarPokemon();
  }
});
