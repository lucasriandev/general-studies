const botao = document.querySelector(".add");
const lista = document.querySelector(".lista");
const input = document.querySelector(".input");

let listao = [];

function salvar() {
  const valor = input.value;
  listao.push(valor);
  console.log(listao);

  input.value = "";
  renderizar();
}

function renderizar() {
  lista.innerHTML = "";

  listao.forEach((item, index) => {
    const Li = document.createElement("li");
    Li.innerHTML = item;

    const del = document.createElement("button");
    del.innerHTML = "X";
    del.addEventListener("click", () => {
      listao.splice(index, 1);
      renderizar();
    });

    Li.appendChild(del);
    lista.appendChild(Li);
  });
}

renderizar();

botao.addEventListener("click", salvar);
