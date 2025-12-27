const input = document.querySelector("#qtd");
const total = document.querySelector("#total");

function calcularTotal() {
  const valor = Number(input.value);
  const multiplicaçao = valor * 2;
  console.log(multiplicaçao);
  total.innerHTML = `Total é R$${multiplicaçao}`;
}
