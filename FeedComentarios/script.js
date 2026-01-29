const inputNome = document.querySelector("#input-nome");
const inputMsg = document.querySelector("#input-msg");
const feed = document.querySelector("#feed1");
const publicar = document.querySelector("#btn-publicar");

let comentarios = JSON.parse(localStorage.getItem("Novidades")) || [];
comentarios = Array.isArray(comentarios) ? comentarios : [];

function publicarComentarios() {
  if (inputNome.value === "" || inputMsg.value === "") {
    alert("Campos vazios");
    return;
  }

  const novoComentario = {
    usuario: inputNome.value,
    conteudo: inputMsg.value,
  };

  comentarios.push(novoComentario);
  localStorage.setItem("Novidades", JSON.stringify(comentarios));

  inputNome.value = "";
  inputMsg.value = "";
}

function renderizar() {
  feed.innerHTML = "";

  comentarios.forEach((item, index) => {
    const novaDiv = document.createElement("div");
    novaDiv.classList.add("comentarios");

    const h3 = document.createElement("h3");
    h3.innerText = item.usuario;

    const p = document.createElement("p");
    p.innerText = item.conteudo;
  });
}
