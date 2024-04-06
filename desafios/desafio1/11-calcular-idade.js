// 11. Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor 
//de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.

function calcularIdade(dataNascimento) {
    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth();
    const diaAtual = new Date().getDate();

    const anoNascimento = dataNascimento.split("-")[0];
    const mesNascimento = dataNascimento.split("-")[1];
    const diaNascimento = dataNascimento.split("-")[2];
    
    let idade = anoAtual - anoNascimento;
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    return idade;
}

console.log(calcularIdade("1999-10-10")); // 25
