const form = document.querySelector("#form-filme");
const input = document.querySelector("#input-filme");
const listaFilmes = document.querySelector("#lista-filmes");

let filme = JSON.parse(localStorage.getItem("FILME")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = input.value;

  if (valor === "") {
    return;
  }

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

    const tituloFilme = document.createElement("h3");
    tituloFilme.innerHTML = item.titulo;

    const btnApagar = document.createElement("button");
    btnApagar.innerHTML = "Apagar";
    btnApagar.addEventListener("click", () => {
      filme.splice(index, 1);
      localStorage.setItem("FILME", JSON.stringify(filme));
      renderizar();
    });

    const btn1 = document.createElement("button");
    btn1.classList.add("btn-favorito");

    if (item.favorito) {
      btn1.innerHTML = "❤️";
      novaDiv.classList.add("favoritado");
    } else {
      btn1.innerHTML = "🤍";
    }

    btn1.addEventListener("click", () => {
      const filmeAchado = filme.find((it) => it.id === item.id);

      filmeAchado.favorito = !filmeAchado.favorito;

      localStorage.setItem("FILME", JSON.stringify(filme));
      renderizar();
    });

    novaDiv.appendChild(tituloFilme);
    novaDiv.appendChild(btn1);
    novaDiv.appendChild(btnApagar);

    listaFilmes.appendChild(novaDiv);
  });
}

renderizar();
