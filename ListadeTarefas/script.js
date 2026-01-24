let tarefas = JSON.parse(localStorage.getItem("TarefasNovas")) || [];

const ul = document.querySelector("#lista");

function mostrarNaTela() {
  ul.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const novoLi = document.createElement("li");
    novoLi.innerText = tarefa;

    const btnApagar = document.createElement("button");
    btnApagar.innerText = "X";
    btnApagar.classList.add("btn-delete");

    btnApagar.addEventListener("click", () => {
      tarefas.splice(index, 1);
      localStorage.setItem("TarefasNovas", JSON.stringify(tarefas));
      mostrarNaTela();
    });
    novoLi.appendChild(btnApagar);
    ul.appendChild(novoLi);
  });
}

mostrarNaTela();

const adicionar = document.querySelector("#btn-add");
const input = document.querySelector("#input-tarefa");
adicionar.addEventListener("click", () => {
  const valor = input.value;
  if (valor === "") return;

  tarefas.push(valor);
  localStorage.setItem("TarefasNovas", JSON.stringify(tarefas));
  mostrarNaTela();
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    adicionar.click();
  }
});
