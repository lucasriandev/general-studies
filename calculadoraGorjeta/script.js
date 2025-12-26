const inputConta = document.querySelector("#valor-conta");
const txtGarcom = document.querySelector("#resultado p:nth-child(1)");
const txtTotal = document.querySelector("#resultado p:nth-child(2)");

function calcularGorjeta(taxa) {
  const valorConta = Number(inputConta.value);
  const valorGarcom = valorConta * taxa;
  const total = valorConta + valorGarcom;

  txtGarcom.innerText = "Garçom: R$ " + valorGarcom.toFixed(2);
  txtTotal.innerText = "Total: R$ " + total.toFixed(2);
}
