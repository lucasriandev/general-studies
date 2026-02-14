const input = document.querySelector("#usuario");
const btn = document.querySelector("#btn-buscar");
const perfilBox = document.querySelector("#perfil-box");

const avatar = document.querySelector("#avatar");
const nome = document.querySelector("#nome");
const bio = document.querySelector("#bio");
const seguidores = document.querySelector("#seguidores");
const seguindo = document.querySelector("#seguindo");
const repositorio = document.querySelector("#repos");

const listaRepos = document.querySelector("#lista-repos");

async function buscarDev() {
  const usuario = input.value;
  if (usuario === "") return;

  const urlPerfil = `https://api.github.com/users/${usuario}`;
  try {
    const respostaPerfil = await fetch(urlPerfil);
    if (!respostaPerfil.ok) {
      throw new Error("Errooooooo");
    }
    const dadosPerfil = await respostaPerfil.json();
    console.log(dadosPerfil);

    avatar.src = dadosPerfil.avatar_url;
    nome.innerText = dadosPerfil.name || dadosPerfil.login;
    bio.innerText = dadosPerfil.bio;
    seguidores.innerText = dadosPerfil.followers;
    seguindo.innerText = dadosPerfil.following;
    repositorio.innerText = dadosPerfil.public_repos;

    perfilBox.style.display = "block";

    //-------------------------------------------------

    const respostaBruta = await fetch(
      `https://api.github.com/users/${usuario}/repos`,
    );

    const dadosRepo = await respostaBruta.json();
    console.log(dadosRepo);

    listaRepos.innerHTML = "";

    dadosRepo.forEach((item) => {
      const novoLi = document.createElement("li");
      novoLi.innerHTML = `<a href="${item.html_url}" target="_blank">
      ${item.name} </a>
      `;

      listaRepos.appendChild(novoLi);
    });

    input.value = "";
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", buscarDev);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});
