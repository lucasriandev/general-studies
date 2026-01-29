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

    const p = document.createElement("p");
    p.innerText = item.conteudo;

    const btnDelete = document.createElement("button");
    btnDelete.innerText = "❌";

    btnDelete.addEventListener("click", () => {
      comentarios.splice(index, 1);
      localStorage.setItem("Novidades", JSON.stringify(comentarios));
      renderizar();
    });

    novaDiv.append(h3, p, btnDelete);
    feed.appendChild(novaDiv);
  });
}

publicar.addEventListener("click", () => {
  if (inputNome.value === "" || inputMsg.value === "") {
    alert("Campos vazios!");
    return;
  }

  const novoComentarios = {
    usuario: inputNome.value,
    conteudo: inputMsg.value,
  };

  comentarios.push(novoComentarios);
  localStorage.setItem("Novidades", JSON.stringify(comentarios));

  inputNome.value = "";
  inputMsg.value = "";

  renderizar();
});

renderizar();

localStorage.clear();
