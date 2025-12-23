const texto = document.querySelector("#texto-conselho");

async function gerarConselho() {
  try {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    if (!resposta.ok) {
      throw new Error("Erro ao ir buscar api");
    }

    const dados = await resposta.json();
    console.log(dados);
    texto.innerText = dados.slip.advice;
  } catch (error) {
    console.log(error);
  }
}

const botao = document.querySelector("#btn-conselho");

botao.addEventListener("click", gerarConselho);
