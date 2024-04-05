// // Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas,
// //que serão recebidos como parâmetro.
function calcImc(altura, peso) {
  //divide-se o peso do paciente pela sua altura elevada ao quadrado.
  let imc = peso / altura ** 2;
  console.log(imc);
  if (imc < 18.5) {
    return console.log("MAGREZA");
  }
  if (imc <= 24.9) {
    return console.log("NORMAL");
  }
  // ENTRE 18,5 E 24,9	NORMAL	0
  if (imc <= 29.9) {
    return console.log("SOBREPESO	I");
  }
  if (imc <= 39.9) {
    return console.log("OBESIDADE	II");
  }
  if (imc >= 40) {
    return console.log("OBESIDADE GRAVE	III");
  }
}

calcImc(1.75, 100);
// // Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

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
fatorial(7);
fatorial(5);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converte(reais) {
  reais = reais * 4.8;
  return `$${reais.toFixed(2)}`;
}

converte(5);
// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function areaRetangulo(altura, largura) {
  let area = altura * largura;
  let perimetro = altura * 2 + largura * 2;
  return `Area: ${area} metros quadrados,  Perimetro: ${perimetro} metros`;
}
areaRetangulo(5, 2);
// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function areaCirculo(raio) {
  const PI = 3.14;
  let area = raio ** 2 * PI;
  let perimetro = 2 * PI * raio;
  return `Area: ${area.toFixed(2)}metros quadrados, Perimetro: ${perimetro.toFixed(2)} metros`;
}

areaCirculo(3);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
  console.log(`Tabuada do ${numero}`);
  let fator = 1;
  while (fator <= 10) {
    let produto = fator * numero;

    console.log(`${numero} x ${fator} = ${produto}`);

    fator++;
  }
}
tabuada(2);
