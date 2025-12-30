const msg = document.querySelector("#mensagem");
const input = document.querySelector("#chute");
const botao = document.querySelector("#btn-chutar");

let numeroSecreto = 0;

function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  console.log("Novo número secreto:", numeroSecreto);

  msg.innerHTML = "Estou pensando em um número... (1 a 10)";
  msg.style.color = "#f1c40f";
  input.value = "";
  input.focus();
}

iniciarJogo();

function verificar() {
  const valor = Number(input.value);

  if (valor === numeroSecreto) {
    msg.innerHTML = "ACERTOUU!! 🎉 O jogo vai reiniciar...";
    msg.style.color = "lightgreen";

    setTimeout(() => {
      iniciarJogo();
    }, 3000);
  } else if (valor < numeroSecreto) {
    msg.innerHTML = "Errou... tente um número MAIOR ⬆️";
    msg.style.color = "orange";
    input.value = "";
    input.focus();
  } else {
    msg.innerHTML = "Errou... tente um número MENOR ⬇️";
    msg.style.color = "orange";
    input.value = "";
    input.focus();
  }
}

botao.addEventListener("click", verificar);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    verificar();
  }
});
