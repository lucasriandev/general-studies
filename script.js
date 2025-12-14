const input = document.querySelector('#input-preco')
const lista = document.querySelector('#lista-produtos')
const span = document.querySelector('#valor-total')
const botao = document.querySelector('#btn-add')

let carrinho = []

botao.addEventListener('click', ()=>{
    const valor = Number(input.value)
    carrinho.push(valor)
    lista.innerHTML += `<li>R$ ${valor}</li>`
    
    let soma = 0
    carrinho.forEach((item)=>{
        soma = soma + item
    })
    span.innerText = soma.toFixed(2) 
    input.value = ''
})