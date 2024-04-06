// 2. Tais está participando de um sorteio na Loteria e recebeu uma lista de números
// aleatórios para poder apostar. Os números foram: 15, 8, 90, 75, 102, 6 e 2. Por ser bastante cautelosa,
// ela gostaria de saber qual é o menor número e qual é o maior número.

// **Ajude Tais e escreva um programa que faça a lógica de programação para organização dos números,
// receba os números da lista e imprima na tela o menor número digitado e o maior número digitado.**

const numeros = [15, 8, 90, 75, 102, 6, 2];
function maior(sorteio) {
  let menor = 0;
  let maior = 0;
  menor = sorteio[0];
  maior = sorteio[0];
  for (let i = 0; i < sorteio.length; i++) {
    if (menor > sorteio[i]) {
      menor = sorteio[i];
    }
    if (maior < sorteio[i]) {
      maior = sorteio[i];
    }
  }
  return console.log(`O maior numero ´é: ${maior} e o menor numero é:${menor}`);
}

console.log(maior(numeros)); // 102, 2
