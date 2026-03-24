const form = document.querySelector("#form-filme");
const input = document.querySelector("#input-filme");
const listaFilmes = document.querySelector("#lista-filmes");

let filme = JSON.parse(localStorage.getItem("FILME")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = input.value;

  const objFilmes = {
    id: Date.now(),
    titulo: valor,
    favorito: false,
  };

  filme.push(objFilmes);
  localStorage.setItem("FILME", JSON.stringify(filme));
  renderizar();
  input.value = "";
});

function renderizar() {
  listaFilmes.innerHTML = "";
  filme.forEach((item, index) => {
    const novaDiv = document.createElement("div");
    novaDiv.classList.add("card-filme");
    novaDiv.innerHTML = `<li>${item.titulo}</li>`;

    if (item.favorito === true) {
      const novoBtn = document.createElement("button");
      novoBtn.classList.add("favoritado");
      novoBtn.innerHTML = "❤️";
      novoBtn.addEventListener("click", () => {});
      novaDiv.appendChild(novoBtn);
    } else {
      novoBtn.innerHTML = "🤍";
    }

    listaFilmes.appendChild(novaDiv);
  });
}
renderizar();
