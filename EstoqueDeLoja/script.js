const ipNome = document.querySelector("#nome");
const ipPreco = document.querySelector("#preco");
const listaProdutos = document.querySelector("#lista-produtos");
const cadastrar = document.querySelector("#btn-add");

let estoque = [];

if (localStorage.getItem("Meu estoque")) {
  estoque = JSON.parse(localStorage.getItem("Meu estoque"));
  mostrarNaTela(estoque);
}

function atualizarBanco() {
  localStorage.setItem("Meu estoque", JSON.stringify(estoque));
}

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
  atualizarBanco();
}

cadastrar.addEventListener("click", () => {
  if (ipNome.value === "" || ipPreco.value === "") {
    alert("Preencha tudo!");
    return;
  }

  const produto = {
    nome: ipNome.value,
    preco: Number(ipPreco.value),
  };
  estoque.push(produto);

  listaProdutos.innerHTML = "";

  mostrarNaTela(estoque);
  atualizarBanco();

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
