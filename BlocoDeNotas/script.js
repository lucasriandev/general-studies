const campoTexto = document.querySelector("#texto");
const botaoLimpar = document.querySelector("#btn-limpar");

const salvo = localStorage.getItem("meuRascunho");

if (salvo) {
  campoTexto.value = salvo;
}

campoTexto.addEventListener("input", () => {
  const valor = campoTexto.value;

  localStorage.setItem("meuRascunho", valor);
});

botaoLimpar.addEventListener("click", () => {
  campoTexto.value = "";
  localStorage.clear();
});
