// 8. Em um sistema de biblioteca, é necessário calcular a multa a ser paga por um usuário que atrasou a devolução de um livro.
// A multa é de R$ 0,50 por dia de atraso. 
//O usuário atrasou a devolução do livro em 7 dias. Crie um algoritmo que faça o cálculo total que o aluno deverá pagar a biblioteca.

const multa = 0.50;
const diasAtraso = 7;
function calculoMulta(multa, diasAtraso){
    return multa * diasAtraso;
}

console.log(calculoMulta(multa, diasAtraso)); // 3.5
