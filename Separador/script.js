let numerosAleatorios = []

const input = document.querySelector('#input-num')
const adicionar = document.querySelector('#btn-add')

let misturados = document.querySelector('#lista-geral')

adicionar.addEventListener('click', ()=>{
    const valor = Number(input.value)
    numerosAleatorios.push(valor)
    console.log(numerosAleatorios)

    misturados.innerHTML += `<li>${valor}</li>` 
})

let pares = document.querySelector('#lista-pares')
let impares = document.querySelector('#lista-impares')

const separar = document.querySelector('#btn-separar')

separar.addEventListener('click', ()=>{
    pares.innerHTML = ''
    impares.innerHTML = ''

    numerosAleatorios.forEach((numeros)=>{
        if(numeros % 2 === 0){
            pares.innerHTML += `<li>${numeros}</li>`
        } else {
            impares.innerHTML += `<li>${numeros}</li>`
        }
    })
})