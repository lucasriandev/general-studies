const campoTexto = document.querySelector("#texto");
const botaoLimpar = document.querySelector("#btn-limpar");

const salvo = localStorage.getItem("meuRascunho");

if (salvo) {
  campoTexto.value = salvo;
}
