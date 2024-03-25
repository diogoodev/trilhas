const NUMBER = 100
let numeroSecreto = parseInt(Math.random() * NUMBER + 1) ;
console.log(numeroSecreto)
let tentativas = 1
let chute
let isDiff = chute != numeroSecreto

alert('Boas vindas ao jogo do número secreto')

while (isDiff) {
    let chute = prompt(`Escolha um número entre 1 e ${NUMBER}`)
    let isGreat = chute > numeroSecreto;
    let isSmall = chute < numeroSecreto
    let isEqual = chute == numeroSecreto;

    if (isEqual) {
        break
    }
    if (isGreat) {
        alert('O número secreto é menor')
    } 
    if(isSmall) {
        alert('O número secreto é maior')
    }
    
    tentativas++
}


let palavraTentativa = tentativas > 1 

if(!palavraTentativa){
    palavraTentativa = 'tentativa' 
}
if(palavraTentativa){
    palavraTentativa = 'tentativas'
}
alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)