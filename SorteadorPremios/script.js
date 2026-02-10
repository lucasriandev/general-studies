const lista = document.querySelector("#lista-nomes");
const add = document.querySelector("#btn-add");
const sortear = document.querySelector("#btn-sortear");
const resultado = document.querySelector("#resultado");
const input = document.querySelector("#input-nome");
const refazer = document.querySelector("#btn-refazer");

let salvarPessoas = JSON.parse(localStorage.getItem("Ganhador")) || [];
function addParticipantes() {
  const valor = input.value;
  salvarPessoas.push(valor);
  localStorage.setItem("Ganhador", JSON.stringify(salvarPessoas));
  console.log(salvarPessoas);
  input.value = "";
  renderizar();
}

function renderizar() {
  lista.innerHTML = "";
  salvarPessoas.forEach((item) => {
    const novoLI = document.createElement("li");
    novoLI.innerText = item;
    lista.appendChild(novoLI);
  });
}

renderizar();

function sorteio() {
  const numero = Math.floor(Math.random() * salvarPessoas.length);
  console.log(numero);
  resultado.innerHTML = salvarPessoas[numero];
}

add.addEventListener("click", () => {
  addParticipantes();
});

sortear.addEventListener("click", () => {
  sorteio();
});

refazer.addEventListener("click", () => {
  input.value = "";
  localStorage.removeItem("Ganhador");
  salvarPessoas = [];
  resultado.innerHTML = "";
  lista.innerHTML = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    add.click();
  }
});
