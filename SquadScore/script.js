const form = document.querySelector("#form-jogador");
const input = document.querySelector("#input-nome");
const listaJogadores = document.querySelector("#lista-jogadores");

let CHAVE = "Jogadores";
let jogadores = JSON.parse(localStorage.getItem(CHAVE)) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = input.value;
  if (valor === "") return;

  let jogador = {
    id: Date.now(),
    titulo: valor,
    pontos: 0,
  };

  jogadores.push(jogador);
  localStorage.setItem(CHAVE, JSON.stringify(jogadores));
  renderizar();

  input.value = "";
});

function renderizar() {
  listaJogadores.innerHTML = "";

  jogadores.forEach((item, index) => {
    const novoLi = document.createElement("li");
    novoLi.classList.add("card-jogador");
    novoLi.innerHTML = `
        <h3>${item.titulo}</h3>
        <div class="controles">
            <button class="btn-menos menos">-</button>
            <span class="pontos">${item.pontos}</span>
            <button class="btn-mais mais">+</button>
        </div>
    `;

    const btnMais = novoLi.querySelector(".mais");
    btnMais.addEventListener("click", () => {
      const jogadorAchado = jogadores.find((t) => t.id === item.id);
      jogadorAchado.pontos += 1;
      localStorage.setItem(CHAVE, JSON.stringify(jogadores));
      renderizar();
    });

    const btnMenos = novoLi.querySelector(".menos");
    btnMenos.addEventListener("click", () => {
      const jogadorEncontrado = jogadores.find((t) => t.id === item.id);

      if (jogadorEncontrado.pontos > 0) {
        jogadorEncontrado.pontos -= 1;
        localStorage.setItem(CHAVE, JSON.stringify(jogadores));
        renderizar();
      }

      jogadorEncontrado.pontos -= 1;
      localStorage.setItem(CHAVE, JSON.stringify(jogadores));
      renderizar();
    });

    listaJogadores.appendChild(novoLi);
  });
}

renderizar();
