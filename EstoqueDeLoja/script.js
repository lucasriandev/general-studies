const ipNome = document.querySelector("#nome");
const ipPreco = document.querySelector("#preco");
const listaProdutos = document.querySelector("#lista-produtos");
const cadastrar = document.querySelector("#btn-add");

let estoque = [];

function mostrarNaTela(listaRecebida) {
  listaProdutos.innerHTML = "";
  listaRecebida.forEach((item, index) => {
    listaProdutos.innerHTML += `
            <li>
                <span>${item.nome}</span>
                <span>R$${item.preco}</span>
                
                <button onclick="deletarProduto(${index})" style="background: red; padding: 5px; margin-left: 10px;">X</button>
            </li>
        `;
  });
}

function deletarProduto(index) {
  estoque.splice(index, 1);
  mostrarNaTela(estoque);
}

cadastrar.addEventListener("click", () => {
  const produto = {
    nome: ipNome.value,
    preco: Number(ipPreco.value),
  };
  estoque.push(produto);

  listaProdutos.innerHTML = "";

  mostrarNaTela(estoque);

  ipNome.value = "";
  ipPreco.value = "";
});

const filtrar = document.querySelector("#btn-filtro");

filtrar.addEventListener("click", () => {
  listaProdutos.innerHTML = "";

  const listaBaratos = estoque.filter((item) => item.preco < 100);
  mostrarNaTela(listaBaratos);
});

const todos = document.querySelector("#btn-todos");

todos.addEventListener("click", () => {
  listaProdutos.innerHTML = "";

  mostrarNaTela(estoque);
});
