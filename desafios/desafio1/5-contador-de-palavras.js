// 5. Escreva um programa que conte o número de palavras em uma frase fornecida pelo usuário. A frase é: "What is Lorem Ipsum?"

function contarPalavras(frase) {
  return frase.split(" ").length;
}

console.log(contarPalavras("What is Lorem Ipsum?")); // 4