const input = document.querySelector("#input-numero");
const listavisual = document.querySelector("#lista-visual");
const spanMaior = document.querySelector("#res-maior");
const spanMenor = document.querySelector("#res-menor");

let listaNumeros = JSON.parse(localStorage.getItem("Numeros")) || [];
listaNumeros = Array.isArray(listaNumeros) ? listaNumeros : [];

listavisual.innerText = listaNumeros.join(", ");

const botaoAdd = document.querySelector("#btn-add");

botaoAdd.addEventListener("click", () => {
  const valor = Number(input.value);

  if (input.value === "") {
    alert("Digite um número!");
    return;
  }

  listaNumeros.push(valor);
  listavisual.innerText = listaNumeros.join(", ");
  localStorage.setItem("Numeros", JSON.stringify(listaNumeros));
  input.value = "";
});

const botaoAnalisar = document.querySelector("#btn-analisar");

botaoAnalisar.addEventListener("click", () => {
  if (listaNumeros.length === 0) {
    alert("Lista vazia");
    return;
  }

  let maior = listaNumeros[0];
  let menor = listaNumeros[0];

  listaNumeros.forEach((item) => {
    if (item > maior) {
      maior = item;
    } else if (item < menor) {
      menor = item;
    }
  });
  spanMaior.innerText = maior;
  spanMenor.innerText = menor;
});
