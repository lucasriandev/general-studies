const inputTexto = document.querySelector("#texto-nota");
const selectCor = document.querySelector("#cor-nota");
const btnColar = document.querySelector("#btn-colar");
const mural = document.querySelector("#mural");

let muralNotas = JSON.parse(localStorage.getItem("Mural"));
muralNotas = Array.isArray(muralNotas) ? muralNotas : [];

function renderizarMural() {
  mural.innerHTML = "";

  muralNotas.forEach((item, index) => {
    const novoDiv = document.createElement("div");
    novoDiv.classList.add("post-it");

    novoDiv.style.backgroundColor = item.cor;

    novoDiv.innerHTML = `<p>${item.texto}</p>`;

    const btnX = document.createElement("button");
    btnX.innerHTML = "❌";
    btnX.classList.add("btn-delete");

    btnX.addEventListener("click", () => {
      muralNotas.splice(index, 1);
      localStorage.setItem("Mural", JSON.stringify(muralNotas));
      renderizarMural();
    });
    novoDiv.appendChild(btnX);
    mural.appendChild(novoDiv);
  });
}

renderizarMural();

function salvarMural() {
  const texto = inputTexto.value;
  const cor = selectCor.value;

  if (texto === "") return;

  const novaNota = {
    texto: texto,
    cor: cor,
  };

  muralNotas.push(novaNota);
  localStorage.setItem("Mural", JSON.stringify(muralNotas));
  renderizarMural();

  inputTexto.value = "";
}

btnColar.addEventListener("click", salvarMural);
inputTexto.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    salvarMural();
  }
});
