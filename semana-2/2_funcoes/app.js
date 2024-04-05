const input = document.querySelector(".container__input");
const reiniciarButton = document.getElementById("reiniciar");
const NUMBER = 10;
let numeroSecreto = randomNumber();

console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
  campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Adivinhe o Numero");
exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");

function randomNumber() {
  return Math.floor(Math.random() * NUMBER + 1);
}

function verificarChute() {
  const isEqual = numeroSecreto === Number(input.value);
  if (isEqual) {
    reiniciarButton.disabled = false;
    return exibirTextoNaTela("p", "É igual");
  }
  if (!isEqual) {
    return exibirTextoNaTela("p", "Não é igual");
  }
}
function novoJogo() {
  exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
  input.value = "";
  reiniciarButton.disabled = true;
  numeroSecreto = randomNumber();
  return console.log(numeroSecreto);
}
