const inputNome = document.querySelector("#input-nome");
const inputTel = document.querySelector("#input-tel");
const ul = document.querySelector("#lista-contatos");
const btnSalvar = document.querySelector("#btn-add");

let minhaAgenda = JSON.parse(localStorage.getItem("Agenda")) || [];

function renderizar() {
  ul.innerHTML = "";

  minhaAgenda.forEach((item, index) => {
    const novoLi = document.createElement("li");

    novoLi.innerHTML = `<div class="info">
        <strong>${item.nome}</strong>
        <span>${item.tel}</span>
        </div>`;

    const btnDelete = document.createElement("button");
    btnDelete.innerText = "X";
    btnDelete.classList.add("btn-delete");

    btnDelete.addEventListener("click", () => {
      minhaAgenda.splice(index, 1);
      renderizar();
      salvarBanco();
    });

    novoLi.appendChild(btnDelete);
    ul.appendChild(novoLi);
  });
}

function salvarBanco() {
  localStorage.setItem("Agenda", JSON.stringify(minhaAgenda));
}

btnSalvar.addEventListener("click", () => {
  if (inputNome.value === "" || inputTel.value === "") return;

  const novoContato = {
    nome: inputNome.value,
    tel: inputTel.value,
  };

  minhaAgenda.push(novoContato);

  renderizar();

  salvarBanco();

  inputNome.value = "";
  inputTel.value = "";
});
