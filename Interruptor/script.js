const clique = document.querySelector("#btn-tema");
const body = document.querySelector("body");

const preferencia = localStorage.getItem("tema");

if (preferencia === "escuro") {
  body.classList.add("dark-mode");
}

clique.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("tema", "escuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
});
