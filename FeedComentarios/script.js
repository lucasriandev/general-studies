const inputNome = document.querySelector("#input-nome");
const inputMsg = document.querySelector("#input-msg");
const feed = document.querySelector("#feed1");
const publicar = document.querySelector("#btn-publicar");

let comentarios = JSON.parse(localStorage.getItem("Novidades")) || [];

function renderizar() {
  feed.innerHTML = "";

  comentarios.forEach((item, index) => {
    const novaDiv = document.createElement("div");
    novaDiv.classList.add("comentarios");

    const h3 = document.createElement("h3");
    h3.innerText = item.usuario;
  });
}
