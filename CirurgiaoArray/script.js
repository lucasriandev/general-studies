const input = document.querySelector("#input-musica");
const add = document.querySelector("#btn-add");
const ul = document.querySelector("#lista-musicas");

let playlist = [];

function atualizarLista() {
  ul.innerHTML = "";

  playlist.forEach((musica, index) => {
    const novoLi = document.createElement("li");
    novoLi.innerText = musica;

    const novoBotao = document.createElement("button");
    novoBotao.innerText = "X";

    novoBotao.addEventListener("click", () => {
      playlist.splice(index, 1); //remove especificamente o botao clicado
      atualizarLista();
      novoBotao.classList.add("btn-delete");
    });

    ul.appendChild(novoLi);
    novoLi.appendChild(novoBotao);
  });
}

function pushArray() {
  const valor = input.value;

  playlist.push(valor);
  console.log(playlist);

  input.value = "";
}

add.addEventListener("click", pushArray);
add.addEventListener("click", atualizarLista);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    pushArray();
    atualizarLista();
  }
});
