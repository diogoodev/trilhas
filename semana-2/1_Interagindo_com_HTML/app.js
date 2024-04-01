const titulo = document.querySelector('h1')
titulo.innerHTML = "Adivinhe o Numero"
const subtitulo = document.querySelector('p')
subtitulo.innerHTML = "Escolha um numero entre 1 e 10"
const input = document.querySelector('.container__input')
const reiniciarButton = document.getElementById('reiniciar')
const NUMBER = 10

function randomNumber(){
    return Math.floor(Math.random() * NUMBER + 1)
}

let numeroSecreto = randomNumber()
console.log(numeroSecreto)

function verificarChute(){
    const isEqual = numeroSecreto === Number(input.value)
    if(isEqual){
        reiniciarButton.disabled = false
        return subtitulo.innerHTML = "É igual"

    }
    if(!isEqual){
        return subtitulo.innerHTML = "NÃO é igual"
    }
}
function novoJogo(){
    subtitulo.innerHTML = "Escolha um numero entre 1 e 10"
    input.value = ""
    reiniciarButton.disabled = true
    numeroSecreto = randomNumber()
    return console.log(numeroSecreto)
}