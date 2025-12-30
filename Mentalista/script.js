let numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log(numeroSecreto);

const msg = document.querySelector("#mensagem");
const input = document.querySelector("#chute");

function verificar() {
  const valor = Number(input.value);

  if (valor === numeroSecreto) {
    msg.innerHTML = "ACERTOUU!! 🎉";
    msg.style.color = "lightgreen";
  } else if (valor < numeroSecreto) {
    msg.innerHTML = "Errou... tente um número MAIOR ⬆️";
    msg.style.color = "orange";
  } else {
    msg.innerHTML = "Errou... tente um número MENOR ⬇️";
    msg.style.color = "orange";
  }

  input.value = "";
  input.focus();
}

const botao = document.querySelector("#btn-chutar");
botao.addEventListener("click", verificar);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    verificar();
  }
});
