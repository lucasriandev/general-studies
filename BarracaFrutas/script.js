const input = document.querySelector("#qtd");
const total = document.querySelector("#total");

let numeroAtual = Number(localStorage.getItem("NumeroAtual"));
if (numeroAtual) {
  input.value = numeroAtual;
}

function calcularTotal() {
  const valor = Number(input.value);
  const multiplicaçao = valor * 2;

  localStorage.setItem("NumeroA", valor);
  console.log(multiplicaçao);
  total.innerHTML = `Total é R$${multiplicaçao}`;
}
