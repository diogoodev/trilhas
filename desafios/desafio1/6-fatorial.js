// 6. Escreva um programa para encontrar o fatorial do número 12.

function fatorial(numero) {
  let fator = numero;
  let stop = 0;
  if (numero == 0 || numero == 1) {
    numero = 1;
    return numero;
  }
  while (fator > stop + 2) {
    stop++;
    numero = numero * (fator - stop);
  }
  return numero;
}

console.log(fatorial(12)); // 479001600
