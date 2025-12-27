let total = 0;
const visor = document.querySelector("#visor");

function adicionar(taxa) {
  total = total + taxa;

  visor.innerHTML = "R$" + total.toFixed(2);
  console.log(total);
}

function zerar() {
  total = 0;
  visor.innerHTML = "R$" + total.toFixed(2);
}
