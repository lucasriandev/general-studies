const form = document.querySelector("#form-habito");
const input = document.querySelector("#input-tarefa");

const listaPendentes = document.querySelector("#lista-pendentes");
const listaConcluido = document.querySelector("#lista-concluidos");

const tarefas = JSON.parse(localStorage.getItem("Atual")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = input.value;

  const habitos = {
    id: Date.now(),
    texto: valor,
    status: "pendente",
  };

  tarefas.push(habitos);
  localStorage.setItem("Atual", JSON.stringify(tarefas));
  renderizar();

  input.value = "";
});

console.log(tarefas);

function renderizar() {
  listaConcluido.innerHTML = "";
  listaPendentes.innerHTML = "";

  tarefas.forEach((item, index) => {
    const novoLi = document.createElement("li");
    novoLi.innerHTML = item.texto;
    novoLi.classList.add("tarefa");

    const btnApagar = document.createElement("button");
    btnApagar.innerText = "apagar";
    btnApagar.classList.add("apagar");

    btnApagar.addEventListener("click", () => {
      tarefas.splice(index, 1);
      localStorage.setItem("Atual", JSON.stringify(tarefas));
      renderizar();
    });

    novoLi.appendChild(btnApagar);

    if (item.status === "pendente") {
      const btnConcluir = document.createElement("button");
      btnConcluir.innerText = "Concluir";
      btnConcluir.classList.add("btn-acao", "btn-concluir");

      btnConcluir.addEventListener("click", () => {
        const concluidos = tarefas.find((t) => t.id === item.id);
        //"Me dá exatamente o item que tem esse ID"
        concluidos.status = "concluido";
        localStorage.setItem("Atual", JSON.stringify(tarefas));
        renderizar();
      });

      novoLi.appendChild(btnConcluir);
      listaPendentes.appendChild(novoLi);
    }

    if (item.status === "concluido") {
      novoLi.classList.add("feita");
      const btnDesfazer = document.createElement("button");
      btnDesfazer.innerHTML = "Desfazer";
      btnDesfazer.classList.add("btn-acao", "btn-desfazer");

      btnDesfazer.addEventListener("click", () => {
        const desfaz = tarefas.find((i) => i.id === item.id);
        desfaz.status = "pendente";
        localStorage.setItem("Atual", JSON.stringify(tarefas));
        renderizar();
      });

      novoLi.appendChild(btnDesfazer);
      listaConcluido.appendChild(novoLi);
    }
  });
}

renderizar();
