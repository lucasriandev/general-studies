const lista = document.querySelector("#lista-nomes");

let participantes = [];

function atualizarLista() {
  lista.innerHTML = "";

  participantes.forEach((item) => {
    let liNovo = document.createElement("li");
    liNovo.innerText = item;

    liNovo.appendChild(lista);
  });
}

const input = document.querySelector("#input-nome");
const add = document.querySelector("#btn-add");

add.addEventListener("click", () => {
  const valor = input.value;

  if (valor === "") {
    return;
  }

  participantes.push(valor);
  console.log(participantes);

  atualizarLista();

  input.value = "";
});

const sortear = document.querySelector("#btn-sortear");
const resultado = document.querySelector("#resultado");
sortear.addEventListener("click", () => {
  const numero = Math.floor(Math.random() * participantes.length);
  console.log(numero);

  resultado.innerHTML = participantes[numero];
});
