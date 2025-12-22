const resultados = ["cara", "coroa"];

function jogar(escolhaDoUsuario) {
  const numeroAleatorio = Math.floor(Math.random() * resultados.length);
  const cpu = resultados[numeroAleatorio];

  if (escolhaDoUsuario === cpu) {
    document.querySelector("#resultado").innerHTML =
      "Deu " + cpu + ". Você GANHOU! 🤑";
    document.querySelector("#resultado").style.color = "lightgreen";
  } else {
    document.querySelector("#resultado").innerHTML =
      "Deu " + cpu + ". Você PERDEU! 💸";
    document.querySelector("#resultado").style.color = "white";
  }
}
