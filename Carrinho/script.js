const input = document.querySelector("#input-preco");
const lista = document.querySelector("#lista-produtos");
const span = document.querySelector("#valor-total");
const botao = document.querySelector("#btn-add");

let carrinho = JSON.parse(localStorage.getItem("ListaCarrinho")) || [];

function resultado() {
  lista.innerHTML = "";

  let soma = 0;

  carrinho.forEach((item, index) => {
    const novoLI = document.createElement("li");
    novoLI.innerHTML = `R$ ${item.toFixed(2)}`;
    lista.appendChild(novoLI);

    const apagar = document.createElement("button");
    apagar.innerHTML = "X";
    apagar.classList.add("btn-delete");

    apagar.addEventListener("click", () => {
      carrinho.splice(index, 1);
      localStorage.setItem("ListaCarrinho", JSON.stringify(carrinho));
      resultado();
    });

    novoLI.appendChild(apagar);

    soma = soma + item;
  });

  span.innerText = soma.toFixed(2);
  input.value = "";
}

resultado();

botao.addEventListener("click", () => {
  const valor = Number(input.value);
  carrinho.push(valor);

  localStorage.setItem("ListaCarrinho", JSON.stringify(carrinho));
  resultado();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    botao.click();
  }
});
