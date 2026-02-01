const input = document.querySelector("#nova-meta");
const botao = document.querySelector("#btn-add");
const lista = document.querySelector("#lista-metas");

let metas = JSON.parse(localStorage.getItem("Metas")) || [];
metas = Array.isArray(metas) ? metas : [];

function salvar() {
  const valor = input.value;
  if (valor === "") {
    alert("Preencha suas metas");
    return;
  }

  metas.push(valor);

  localStorage.setItem("Metas", JSON.stringify(metas));

  input.value = "";

  renderizar();
}

function renderizar() {
  lista.innerHTML = "";

  metas.forEach((item, index) => {
    const novoLi = document.createElement("li");
    novoLi.innerText = item;

    const novoBtn = document.createElement("button");
    novoBtn.innerText = "❌";

    novoBtn.addEventListener("click", () => {
      metas.splice(index, 1);
      localStorage.setItem("Metas", JSON.stringify(metas));
      renderizar();
    });

    lista.append(novoLi, novoBtn);
  });
}

botao.addEventListener("click", salvar);

renderizar();

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    salvar();
  }
});
