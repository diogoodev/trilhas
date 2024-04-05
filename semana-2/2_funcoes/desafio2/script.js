// Desafios
// Criar uma função que exibe "Olá, mundo!" no console.

function greeting(){
    return console.log('Olá mundo!')
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function betterGreeting(nome){
    return console.log(`Olá, ${nome}`)
}

betterGreeting('Diogo')

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function doble(numero){
    return numero * 2
}

console.log(numero(2))

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(valor1, valor2, valor3){
    return (valor1 + valor2 + valor3) / 3
}
console.log(media(2, 3, 4))
// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maior(valor1, valor2){
    const isMaior = valor1 > valor2
    if(isMaior){
        return valor1
    }
    if(!isMaior){
        return valor2
    }
}

console.log(maior(1,2))

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function mult(numero){
    return numero * numero
}

console.log(mult(5))