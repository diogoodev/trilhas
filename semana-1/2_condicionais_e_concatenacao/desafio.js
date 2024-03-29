//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let pergunta = prompt("Qual é o dia da semana?")
let isWeekend = pergunta == "Sábado" || pergunta == "Domingo"
let isWeek = !isWeekend
if(isWeekend){
    alert("Bom fim de semana!")
}
if(isWeek){
    alert("Boa semana!")
}
//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let verificador = prompt("Insira um número:");
let isPositive =  verificador > 0;
let isNegative = !isPositive;

if(isPositive){
    alert("O número é positivo")
}

if(isNegative){
    alert("O número é negativo")
} 

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
alert("Vamos jogar um jogo! Quanto menos tentativas mais pontos.")

alert("Se você fizer 100 pontos ou mais, você venceu. Caso contrário, tente novamente para ganhar")

alert("Advinhe o número de 1 a 10")

let numero = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let acertou = false;

while(tentativas < 3){
    let chute = parseInt(prompt("Tentativa " + (tentativas + 1) + ":"));
    if(chute == numero){
        acertou = true;
        break;
    }
    tentativas++;
}

let pontos = 0;
let isGreatherThan = pontos >= 100
let isSmallThan = !isGreatherThan

if(isGreatherThan){
    alert("Parabéns, você venceu!" + (pontos+= tentativas + 100))
}
if(isSmallThan){
    alert("Você perdeu tente novamente para ganhar." + (pontos -= tentativas - 20))
}


//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 1000;
alert(`Seu saldo é de R$${saldo},00`)

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt("Insira seu nome:");
alert(`Bem-vindo ${nome}!`)