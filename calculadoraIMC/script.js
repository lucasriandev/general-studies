const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const resultado = document.querySelector("#resultado");
const btnCalcular = document.querySelector("#btn-calcular");

function calcular() {
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso || !altura) {
    alert("Digite peso e altura");
    return;
  }

  const imc = peso / (altura * altura);
  console.log(imc);

  let mensagem = "";
  if (imc < 18.5) {
    mensagem = "Abaixo do peso";
  } else if (imc <= 24.9) {
    mensagem = "Peso normal";
  } else if (imc <= 29.9) {
    mensagem = "Sobrepeso";
  } else if (imc >= 30) {
    mensagem = "Obesidade";
  }

  resultado.innerText = `IMC ${imc.toFixed(1)} - ${mensagem}`;

  inputPeso.value = "";
  inputAltura.value = "";
}

btnCalcular.addEventListener("click", calcular);
btnCalcular.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calcular();
  }
});
