const input = document.querySelector("#input-tarefa");
const adicionar = document.querySelector("#btn-add");
const lista = document.querySelector("#lista");

let minhaLista = [];

const listaguardada = localStorage.getItem("lista");

if (listaguardada) {
  minhaLista = JSON.parse(listaguardada);
}

minhaLista.forEach((item) => {
  desenharTarefas(item);
});

function desenharTarefas(texto) {
  const novoLi = document.createElement("li");
  novoLi.innerText = texto;

  const novoBtn = document.createElement("button");
  novoBtn.innerText = "❌";
  novoBtn.classList.add("btn-delete");

  novoBtn.addEventListener("click", () => {
    novoLi.remove();
    const posicao = minhaLista.indexOf(texto);

    if (posicao !== -1) {
      minhaLista.splice(posicao, 1);
    }

    localStorage.setItem("lista", JSON.stringify(minhaLista));
  });

  novoLi.appendChild(novoBtn);
  lista.appendChild(novoLi);
}

adicionar.addEventListener("click", () => {
  const valor = input.value;

  minhaLista.push(valor);
  desenharTarefas(valor);

  localStorage.setItem("lista", JSON.stringify(minhaLista));
});
