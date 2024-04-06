// Desenvolver um programa para contar o número de letras
// maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”

function contarMaiusculas(frase) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === frase[i].toUpperCase() && frase[i] !== " ") {
      contador++;
    }
  }
  return contador;
}

console.log(contarMaiusculas("LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY")); // 29