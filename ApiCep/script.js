const cepInput = document.querySelector("#cep-input");
const botao = document.querySelector("#btn-buscar");

const inputRua = document.querySelector("#rua");
const inputBairro = document.querySelector("#bairro");
const inputCidade = document.querySelector("#cidade");

let informacoes = JSON.parse(localStorage.getItem("CepCidade")) || [];

cepInput.value = informacoes;

botao.addEventListener("click", async () => {
  try {
    const valorDoCep = cepInput.value;

    if (valorDoCep.length !== 8) {
      alert("O CEP precisa ter 8 dígitos!");
      return;
    }

    const resposta = await fetch(
      `https://viacep.com.br/ws/${valorDoCep}/json/`,
    );

    if (!resposta.ok) {
      throw new Error("Erro no servidor");
    }

    const dados = await resposta.json();

    if (dados.erro) {
      alert("CEP não encontrado!");
      return;
    }

    localStorage.setItem("CepCidade", JSON.stringify(valorDoCep));

    inputRua.value = dados.logradouro;
    inputBairro.value = dados.bairro;
    inputCidade.value = dados.localidade + "/" + dados.uf;
  } catch (error) {
    console.log(error);
    alert("Deu algo errado na busca. Verifique o CEP.");
  }
});
