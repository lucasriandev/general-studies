const cardPrincipal = document.querySelector('#productCard')
const texto = document.querySelector('#colorName')
const todosBotao = document.querySelectorAll('.color-btn')

todosBotao.forEach((on)=>{
    on.addEventListener('click', (event)=>{
        let cores = event.target.getAttribute('data-color')
        let nomes = event.target.getAttribute('data-name')

        cardPrincipal.style.background = cores
        texto.innerHTML = nomes

        todosBotao.forEach((ligar)=>{
            ligar.classList.remove('selected')
        })
        event.target.classList.add('selected')
    })
})
