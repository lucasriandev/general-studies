const nome = document.querySelector("#cliente-nome");
const cargo = document.querySelector("#cliente-cargo");
const texto = document.querySelector("#cliente-texto");

const clientes = [
  {
    nome: "Ana Silva",
    cargo: "Designer",
    texto: "O serviço foi incrível, mudou minha carreira!",
  },
  {
    nome: "Carlos Souza",
    cargo: "Programador",
    texto: "Aprendi JavaScript muito rápido com esse método.",
  },
  {
    nome: "Beatriz Lima",
    cargo: "Gerente",
    texto: "A equipe é muito atenciosa e o produto é ótimo.",
  },
];

let indice = 0;

function carregarClientes() {
  const Atual = clientes[indice];
  nome.innerText = Atual.nome;
  cargo.innerText = Atual.cargo;
  texto.innerText = Atual.texto;
}

carregarClientes();

const botao = document.querySelector("#btn-proximo");

botao.addEventListener("click", () => {
  indice++;

  if (indice >= clientes.length) {
    indice = 0;
  }

  carregarClientes();
});
