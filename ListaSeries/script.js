const input = document.querySelector("#input-serie");
const salvar = document.querySelector("#btn-add");
const ul = document.querySelector("#lista");

let minhasSeries = JSON.parse(localStorage.getItem("MinhasSeries")) || [];
minhasSeries = Array.isArray(minhasSeries) ? minhasSeries : [];

function salvarSeries() {
  const valor = input.value;
  minhasSeries.push(valor);
  localStorage.setItem("MinhasSeries", JSON.stringify(minhasSeries));

  input.value = "";

  renderizarSeries();
}

function renderizarSeries() {
  ul.innerHTML = "";

  minhasSeries.forEach((item, index) => {
    const novoLi = document.createElement("li");
    novoLi.innerText = item;

    const apagar = document.createElement("button");
    apagar.innerText = "❌";

    apagar.addEventListener("click", () => {
      minhasSeries.splice(index, 1);
      localStorage.setItem("MinhasSeries", JSON.stringify(minhasSeries));
      renderizarSeries();
    });

    ul.append(novoLi, apagar);
  });
}

renderizarSeries();

salvar.addEventListener("click", salvarSeries);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    salvarSeries();
  }
});
