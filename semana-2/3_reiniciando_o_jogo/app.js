const input = document.querySelector(".container__input");
const reiniciarButton = document.getElementById("reiniciar");
const NUMBER = 10;
let numeroSecreto = randomNumber();
let contador = 0
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
  const isBiger = Number(input.value) < numeroSecreto
  const isSmall = numeroSecreto  < Number(input.value);
  contador++

  if (isEqual) {
    reiniciarButton.disabled = false;
    exibirTextoNaTela('h1', "Você ganhou!")
    exibirTextoNaTela("p", `Você acertou após ${contador} ${contador > 1 ? 'tentativas' : 'tentativa' }`);
  }
  if (isBiger) {
    exibirTextoNaTela("p", "É maior ");
    input.value = ""
  }
  if (isSmall) {
    exibirTextoNaTela("p", "Quase! é menor");
    input.value = ""
  }

  console.log(contador)
}
function novoJogo() {
  numeroSecreto = randomNumber();
  input.value = "";
  exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
  reiniciarButton.disabled = true;
  contador = 0
  return console.log(numeroSecreto);
}
