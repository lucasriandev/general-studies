const ipNome = document.querySelector("#nome");
const ipPreco = document.querySelector("#preco");
const listaProdutos = document.querySelector("#lista-produtos");
const cadastrar = document.querySelector("#btn-add");

let estoque = [];

cadastrar.addEventListener("click", () => {
  const produto = {
    nome: ipNome.value,
    preco: Number(ipPreco.value),
  };
  estoque.push(produto);

  listaProdutos.innerHTML = "";

  estoque.forEach((item) => {
    listaProdutos.innerHTML += `<li><span>${item.nome}</span><span>R$${item.preco}</span></li>`;
  });

  ipNome.value = "";
  ipPreco.value = "";
});

const filtrar = document.querySelector("#btn-filtro");

filtrar.addEventListener("click", () => {
  listaProdutos.innerHTML = "";

  estoque.forEach((item) => {
    if (item.preco < 100) {
      listaProdutos.innerHTML += `<li><span>${item.nome}</span><span>R$${item.preco}</span></li>`;
    }
  });
});

const todos = document.querySelector("#btn-todos");

todos.addEventListener("click", () => {
  listaProdutos.innerHTML = "";

  estoque.forEach((item) => {
    listaProdutos.innerHTML += `<li><span>${item.nome}</span><span>R$${item.preco}</span></li>`;
  });
});
