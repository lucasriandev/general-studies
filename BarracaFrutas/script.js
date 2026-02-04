const input = document.querySelector("#qtd");
const total = document.querySelector("#total");

let numeroAtual = JSON.parse(localStorage.getItem("NumeroA"));

if (numeroAtual) {
  input.value = numeroAtual.quantidade;
  total.innerText = `Total é R$${numeroAtual.total}`;
}

function calcularTotal() {
  const valor = Number(input.value);
  const multiplicaçao = valor * 2;

  const valores = {
    quantidade: valor,
    total: multiplicaçao,
  };

  localStorage.setItem("NumeroA", JSON.stringify(valores));

  console.log(multiplicaçao);
  total.innerHTML = `Total é R$${multiplicaçao}`;
}
