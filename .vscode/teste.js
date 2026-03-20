const form = document.querySelector("#form-habito");
const input = document.querySelector("#input-tarefa");

const listaPendentes = document.querySelector("#lista-pendentes");
const listaConcluidos = document.querySelector("#lista-concluidos");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = input.value;

  const novasTarefas = {
    id: Date.now(),
    texto: valor,
    status: "pendente",
  };

  tarefas.push(novasTarefas);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  renderizar();
  input.value = "";
});

function renderizar() {
  listaConcluidos.innerHTML = "";
  listaPendentes.innerHTML = "";

  tarefas.forEach((item, index) => {
    const novoLi = document.createElement("li");
    novoLi.innerHTML = item.texto;
    novoLi.classList.add("tarefa");

    if (item.status === "pendente") {
      const btnConcluir = document.createElement("button");
      btnConcluir.innerHTML = "Concluido";

      btnConcluir.addEventListener("click", () => {
        const concluidosss = tarefas.find((con) => con.id === item.id);
        concluidosss.status = "concluido";
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
        renderizar();
      });
      novoLi.appendChild(btnConcluir);
      listaPendentes.appendChild(novoLi);
    }

    if (item.status === "concluido") {
      novoLi.classList.add("feita");
      const btnDesfazer = document.createElement("button");
      btnDesfazer.innerHTML = "Desfazer";

      btnDesfazer.addEventListener("click", () => {
        const pendentesss = tarefas.find((pend) => pend.id === item.id);
        pendentesss.status = "pendente";
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
        renderizar();
      });
      novoLi.appendChild(btnDesfazer);
      listaConcluidos.appendChild(novoLi);
    }
  });
}

renderizar();
