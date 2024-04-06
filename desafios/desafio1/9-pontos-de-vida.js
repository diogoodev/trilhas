// 9. Em um jogo de RPG, o personagem do jogador possui pontos de vida (HP) que são reduzidos quando
// ele sofre danos dos inimigos. Seu personagem começa com 100 pontos de vida e sofre danos de 20 pontos em um ataque. 
//Crie um algoritmo informando quantos pontos de vida restarão após três ataques?

const pontosDeVida = 100;
const dano = 20;
const ataques = 3;
function pontosRestantes(pontosDeVida, dano, ataques){
    return pontosDeVida - (dano * ataques);
}

console.log(pontosRestantes(pontosDeVida, dano, ataques)); // 40
