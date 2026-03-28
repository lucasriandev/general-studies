let tempoEmSegundos = 25 * 60;
let intervaloId = null;

const Min = document.querySelector("#minutos");
const Seg = document.querySelector("#segundos");

const iniciar = document.querySelector("#btn-iniciar");
const pausar = document.querySelector("#btn-pausar");
const zerar = document.querySelector("#btn-zerar");

function atualizarTela() {
  const minutos = Math.floor(tempoEmSegundos / 60);
  const segundos = Math.floor(tempoEmSegundos % 60);

  const minutosFormatado = String(minutos).padStart(2, "0");
  const segundosFormatado = String(segundos).padStart(2, "0");

  Min.innerHTML = minutosFormatado;
  Seg.innerHTML = segundosFormatado;
}

iniciar.addEventListener("click", () => {
  if (intervaloId) return;
  intervaloId = setInterval(() => {
    tempoEmSegundos -= 1;
    atualizarTela();
    if (tempoEmSegundos === 0) {
      clearInterval(intervaloId);
      alert("Tempo esgotado");
    }
  }, 1000);
});

pausar.addEventListener("click", () => {
  clearInterval(intervaloId);
  intervaloId = null;
});

zerar.addEventListener("click", () => {
  clearInterval(intervaloId);
  intervaloId = null;
  tempoEmSegundos = 25 * 60;
  atualizarTela();
});

atualizarTela();
