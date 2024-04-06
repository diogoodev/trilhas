// Havia uma antiga guilda de alquimistas que guardava seus segredos em uma série de frascos numerados.
// No entanto, ao longo dos anos, os frascos foram sendo desorganizados e agora os aprendizes alquimistas
// precisam restaurar a ordem. Os números dos frascos representam a idade dos alquimistas que os criaram.
// Eles devem ser ordenados em ordem crescente para revelar um segredo alquímico há muito perdido.
// Mas, para isso, os aprendizes devem usar suas habilidades em algoritmos de ordenação.

// **Escreva um programa que faça a ordenação dos frascos: 12, 5, 23, 17, 8, 14, 3, 19.**

const frascos = [12, 5, 23, 17, 8, 14, 3, 19];
function ordenar(items) {
  let temp = 0;
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[i]) {
        temp = items[i];
        items[i] = items[j];
        items[j] = temp;
      }
    }
  }
}

console.log(ordenar(frascos)); // [3, 5, 8, 12, 14, 17, 19, 23]