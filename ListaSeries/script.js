let minhasSeries = JSON.parse(localStorage.getItem("Series")) || [];

const ul = document.querySelector("#lista");

function desenharNaTela() {
  ul.innerHTML = "";

  minhasSeries.forEach((serie, index) => {
    const novoLi = document.createElement("li");
    novoLi.innerText = serie;

    const novoBtn = document.createElement("button");
    novoBtn.innerText = "X";

    novoBtn.addEventListener("click", () => {
      minhasSeries.splice(index, 1);
      //Splice (Tira da memória).
      localStorage.setItem("Series", JSON.stringify(minhasSeries));
      //SetItem (Salva a memória nova).
      desenharNaTela();
      //Desenhar (Mostra como ficou).
    });
    novoLi.appendChild(novoBtn);
    ul.appendChild(novoLi);
  });
}
desenharNaTela();

const salvar = document.querySelector("#btn-add");
const input = document.querySelector("#input-serie");

salvar.addEventListener("click", () => {
  const valor = input.value;
  if (valor === "") return;

  minhasSeries.push(valor);

  localStorage.setItem("Series", JSON.stringify(minhasSeries));

  desenharNaTela();

  input.value = "";
});
