const input = document.querySelector("#input-item");
const btnAdd = document.querySelector("#btn-add");
const lista = document.querySelector("#lista");

let listaCompras = JSON.parse(localStorage.getItem("Compras")) || [];
listaCompras = Array.isArray(listaCompras) ? listaCompras : [];

function salvarCompras() {
  const valor = input.value;

  let LISTAO = {
    compras: valor,
    comprado: false,
  };

  listaCompras.push(LISTAO);
  localStorage.setItem("Compras", JSON.stringify(listaCompras));
  renderizar();
}

function renderizar() {
  lista.innerHTML = "";

  listaCompras.forEach((item, index) => {
    const novoLi = document.createElement("li");
    if (item.comprado === true) {
      novoLi.classList.add("riscado");
    }

    novoLi.innerHTML = `<span>${item.compras}</span>`;
    novoLi.addEventListener("click", () => {
      item.comprado = !item.comprado;
      localStorage.setItem("Compras", JSON.stringify(listaCompras));
      renderizar();
      input.value = "";
    });

    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "🗑️";
    btnDelete.classList.add("btn-delete");

    btnDelete.addEventListener("click", () => {
      listaCompras.splice(index, 1);
      localStorage.setItem("Compras", JSON.stringify(listaCompras));
      renderizar();
      input.value = "";
    });

    novoLi.appendChild(btnDelete);
    lista.appendChild(novoLi);
  });
}

renderizar();

btnAdd.addEventListener("click", salvarCompras);
