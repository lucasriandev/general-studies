const opcoes = ["pedra", "papel", "tesoura"];

const usuario = document.querySelector("#pontos-usuario");
const cpu = document.querySelector("#pontos-cpu");

let pontosUsuario = 0;
let pontosCPU = 0;

function jogar(escolhaDoUsuario) {
  const numeroSorteado = Math.floor(Math.random() * opcoes.length);
  const escolhaCPU = opcoes[numeroSorteado];
  console.log(escolhaCPU);

  if (escolhaDoUsuario === escolhaCPU) {
    document.querySelector("#mensagem").innerText = "Empate! 😐";
  } else if (
    (escolhaDoUsuario === "pedra" && escolhaCPU === "tesoura") ||
    (escolhaDoUsuario === "tesoura" && escolhaCPU === "papel") ||
    (escolhaDoUsuario === "papel" && escolhaCPU === "pedra")
  ) {
    pontosUsuario++;
    usuario.innerHTML = pontosUsuario;
    document.querySelector("#mensagem").innerText = "Você Ganhou! 🎉";
  } else {
    pontosCPU++;
    cpu.innerHTML = pontosCPU;
    document.querySelector("#mensagem").innerText = "CPU Ganhou! 🤖";
  }
}
