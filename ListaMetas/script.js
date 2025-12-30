const input = document.querySelector("#nova-meta");
const botao = document.querySelector("#btn-add");
const lista = document.querySelector("#lista-metas");

function central() {
  if (input.value === "") {
    alert("Digite uma meta");
    return;
  }

  const novoItem = document.createElement("li");
  novoItem.innerText = input.value;

  novoItem.addEventListener("click", () => {
    novoItem.classList.toggle("riscado");
  });

  const btnDelete = document.createElement("button");
  btnDelete.innerText = "❌";

  btnDelete.addEventListener("click", () => {
    novoItem.remove();
  });

  novoItem.appendChild(btnDelete);
  lista.appendChild(novoItem);

  input.value = "";
}

botao.addEventListener("click", central);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    central();
  }
});
