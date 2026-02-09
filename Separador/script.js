let numerosAleatorios = JSON.parse(localStorage.getItem("Numeros")) || [];

const input = document.querySelector("#input-num");
const adicionar = document.querySelector("#btn-add");
const separar = document.querySelector("#btn-separar");

let misturados = document.querySelector("#lista-geral");
let pares = document.querySelector("#lista-pares");
let impares = document.querySelector("#lista-impares");

function salvarEmMisturados() {
  const valor = Number(input.value);
  if (input.value === "") return;

  numerosAleatorios.push(valor);
  console.log(numerosAleatorios);

  localStorage.setItem("Numeros", JSON.stringify(numerosAleatorios));

  misturados.innerHTML += `<li>${valor}</li>`;
}

function separarNumeros() {
  pares.innerHTML = "";
  impares.innerHTML = "";

  numerosAleatorios.forEach((numeros) => {
    if (numeros % 2 === 0) {
      pares.innerHTML += `<li>${numeros}</li>`;
    } else {
      impares.innerHTML += `<li>${numeros}</li>`;
    }
  });
}

function carregarNaTela() {
  misturados.innerHTML = "";

  numerosAleatorios.forEach((numero) => {
    misturados.innerHTML += `<li>${numero}</li>`;
  });
}

carregarNaTela();
separarNumeros();

adicionar.addEventListener("click", salvarEmMisturados);
separar.addEventListener("click", separarNumeros);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    adicionar.click();
  }
});

localStorage.clear();
