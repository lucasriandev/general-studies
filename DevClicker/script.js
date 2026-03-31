let tempo = 10;
let cliques = 0;
let intervaloId = null;
let jogoRodando = false;

const btnClique = document.querySelector("#area-clique");
const iniciar = document.querySelector("#btn-iniciar");
const contador = document.querySelector("#contador-cliques");
const telaTempo = document.querySelector("#tempo-restante");

iniciar.addEventListener("click", () => {
  jogoRodando = true;
  cliques = 0;
  tempo = 10;

  contador.innerHTML = 0;
  telaTempo.innerHTML = 10;

  iniciar.disabled = true;

  intervaloId = setInterval(() => {
    tempo -= 1;
    telaTempo.innerHTML = tempo;
    if (tempo === 0) {
      clearInterval(intervaloId);
      jogoRodando = false;
      iniciar.disabled = false;
      alert("Tempo esgotou");
    }
  }, 1000);
  return;
});

btnClique.addEventListener("click", () => {
  if (jogoRodando === false) {
    return;
  } else if (jogoRodando === true) {
    cliques += 1;
    contador.innerHTML = cliques;
    console.log("clicou");
  }
});
