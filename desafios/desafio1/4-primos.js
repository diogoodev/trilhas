// Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. 
// Ele pede sua ajuda para identificar esses números criando um algoritmo. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.

const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
function verificar(numeros){
    let primos = [];
    for (let i = 0; i < numeros.length; i++){
        let primo = true;
        for (let j = 2; j < numeros[i]; j++){
        if (numeros[i] % j === 0){
            primo = false;
            break;
        }
        }
        if (primo){
        primos.push(numeros[i]);
        }
    }
    return primos;
}

console.log(verificar(numeros)); // [23, 11, 19, 5]