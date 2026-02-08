let segundos = 0;
let intervalo;
let cronometrando = false;

const visor = document.querySelector("#tempo");

let tempoAtual = JSON.parse(localStorage.getItem("TempoAtual")) || [];
if (tempoAtual) {
  segundos = tempoAtual;
  atualizarVisor();
}

const iniciar = document.querySelector("#btn-iniciar");
const pausar = document.querySelector("#btn-pausar");
const zerar = document.querySelector("#btn-zerar");

function atualizarVisor() {
  const min = Math.floor(segundos / 60);
  const sec = segundos % 60;
  visor.innerText = `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
}

iniciar.addEventListener("click", () => {
  if (cronometrando === true) {
    return;
  }

  cronometrando = true;

  intervalo = setInterval(() => {
    segundos++;
    salvarTempo();
    atualizarVisor();
  }, 1000);
});

pausar.addEventListener("click", () => {
  clearInterval(intervalo);
  cronometrando = false;
  salvarTempo();
});

zerar.addEventListener("click", () => {
  clearInterval(intervalo);
  segundos = 0;
  localStorage.removeItem("TempoAtual");
  atualizarVisor();
  cronometrando = false;
});

function salvarTempo() {
  localStorage.setItem("TempoAtual", segundos);
}
