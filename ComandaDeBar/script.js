const visor = document.querySelector("#visor");

let total = JSON.parse(localStorage.getItem("Comanda")) || 0;

visor.innerHTML = `R$` + total.toFixed(2);

function adicionar(taxa) {
  total = total + taxa;

  visor.innerHTML = "R$" + total.toFixed(2);
  console.log(total);

  localStorage.setItem("Comanda", JSON.stringify(total));
}

function zerar() {
  total = 0;
  visor.innerHTML = "R$" + total.toFixed(2);
  localStorage.removeItem("Comanda");
}
