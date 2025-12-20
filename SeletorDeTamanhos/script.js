const produtos = [
  {
    nome: "Camiseta Básica",
    preco: "R$ 49,90",
    tamanhos: ["P", "M", "G", "GG"],
  },
  {
    nome: "Tênis Esportivo",
    preco: "R$ 299,90",
    tamanhos: ["39", "40", "41", "42"],
  },
  {
    nome: "Calça Jeans",
    preco: "R$ 120,00",
    tamanhos: ["36", "38", "40", "42"],
  },
];

const nome = document.querySelector("#nome-produto");
const preco = document.querySelector("#preco-produto");
const abasProdutos = document.querySelectorAll(".btn-tamanho");
const proximoProduto = document.querySelector("#btn-proximo");

let indiceAtual = 0;

function carregarProdutos() {
  const atual = produtos[indiceAtual];
  nome.innerText = atual.nome;
  preco.innerText = atual.preco;

  abasProdutos[0].innerText = atual.tamanhos[0];
  abasProdutos[1].innerText = atual.tamanhos[1];
  abasProdutos[2].innerText = atual.tamanhos[2];
  abasProdutos[3].innerText = atual.tamanhos[3];
}

carregarProdutos();

proximoProduto.addEventListener("click", () => {
  indiceAtual++;
  if (indiceAtual >= produtos.length) {
    indiceAtual = 0;
  }

  carregarProdutos();
});
