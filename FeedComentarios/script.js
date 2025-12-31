const inputNome = document.querySelector("#input-nome");
const inputMsg = document.querySelector("#input-msg");
const feed = document.querySelector("#feed1");
const publicar = document.querySelector("#btn-publicar");

function central() {
  if (inputNome.value === "" || inputMsg.value === "") {
    alert("Preencha todos os campos");
    return;
  }

  const novaDIV = document.createElement("div");
  novaDIV.classList.add("comentario");
  novaDIV.addEventListener("click", () => {});

  const h3 = document.createElement("h3");
  h3.innerText = inputNome.value;

  const p = document.createElement("p");
  p.innerText = inputMsg.value;

  const btnDelete = document.createElement("button");
  btnDelete.innerText = "❌";

  btnDelete.addEventListener("click", () => {
    btnDelete.classList.toggle("btn-delete");
  });

  novaDIV.appendChild(h3);
  novaDIV.appendChild(p);
  novaDIV.appendChild(btnDelete);

  feed.appendChild(novaDIV);
}

publicar.addEventListener("click", central);
