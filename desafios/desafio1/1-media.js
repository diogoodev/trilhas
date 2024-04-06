// 1. Imagine que você está criando um sistema escolar para obter a média dos alunos da sala. 
// Foram realizadas 3 avaliações com nota máxima de 10 pontos. Aline, tirou na primeira nota o total de 8 pontos,
// na segunda nota tirou 9 pontos e na terceira nota 7 pontos. 

// **Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.**

function media(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3 ) / 3
    return console.log(`A media das notas é: ${media.toFixed(2)}`)
}

console.log(media(8, 9, 7)) // 8
