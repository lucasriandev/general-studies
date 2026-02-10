const input = document.querySelector("#input-tarefa");
const btnAdd = document.querySelector("#btn-add");
const btnLimpar = document.querySelector("#btn-limpar");
const lista = document.querySelector("#lista");

let minhasTarefas = JSON.parse(localStorage.getItem("MinhasTarefas")) || [];
minhasTarefas = Array.isArray(minhasTarefas) ? minhasTarefas : [];

function salvar() {
  const valor = input.value;
  let listaTarefas = {
    tarefa: valor,
    concluida: false,
  };

  minhasTarefas.push(listaTarefas);
  localStorage.setItem("MinhasTarefas", JSON.stringify(minhasTarefas));
  input.value = "";
  renderizar();
  console.log(minhasTarefas);
}

function renderizar() {
  lista.innerHTML = "";
  minhasTarefas.forEach((item) => {
    const novoLi = document.createElement("li");
    if (item.concluida === true) {
      novoLi.classList.add("riscado");
    }
    novoLi.innerHTML = `<span>${item.tarefa}</span>`;
    novoLi.addEventListener("click", () => {
      item.concluida = !item.concluida;
      localStorage.setItem("MinhasTarefas", JSON.stringify(minhasTarefas));
      renderizar();
      input.value;
    });
    lista.appendChild(novoLi);
  });
}

btnLimpar.addEventListener("click", () => {
  minhasTarefas = minhasTarefas.filter((item) => item.concluida === false);
  localStorage.setItem("MinhasTarefas", JSON.stringify(minhasTarefas));
  renderizar();
});

renderizar();

btnAdd.addEventListener("click", salvar);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btnAdd.click();
  }
});
