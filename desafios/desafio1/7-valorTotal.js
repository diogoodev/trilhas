// 7. Em uma loja de conveniência, um cliente comprou três itens e precisa calcular o total da compra.
// Os preços dos itens são R$ 2,50, R$ 3,75 e R$ 1,99. Crie um algoritmo que retorne o valor total.

const itens = [2.50, 3.75, 1.99];
function valorTotal(itens){
    let total = 0;
    for (let i = 0; i < itens.length; i++){
        total += itens[i];
    }
    return total;
}

console.log(valorTotal(itens)); // 8.24

