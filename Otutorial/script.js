const passos = [
  "Passo 1: Abra a caixa",
  "Passo 2: Tire o produto",
  "Passo 3: Ligue na tomada",
];

const p = document.querySelector("#texto-instrucao");
const clique = document.querySelector("#btn-proximo");

let indice = 0;
p.innerText = passos[0];

clique.addEventListener("click", () => {
  indice++;

  if (indice >= passos.length) {
    indice = 0;
  }

  p.innerText = passos[indice];
});
