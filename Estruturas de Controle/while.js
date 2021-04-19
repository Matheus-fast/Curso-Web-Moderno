/**
 * Utilizado para criar um laço que executará uma rotina específica
 * enquanto a condição de teste for verdadeira
 * 
 * @syntax while (condition) { routine } 
 * @condition 
 * Uma expressão avaliada antes de cada passagem através do laço,
 * caso seja executada com verdadeira, será executada. Ao ser avaliada
 * como falsa, a execução continuará na declaração depois do laço while
 * 
 * @routine 
 * Uma declaração que é executada enquanto a condição é verdadeira
*/

function getRandomInteger(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while (option != -1) {
    opcao = getRandomInteger(-1, 10)
    console.log(`A opção escolhida foi ${option}`)
}

console.log('Laço finalizado.')

/**
 * Inicialmente a expressão é verdadeira. Ao seu decorrer, irá sortear 
 * números aleatórios até que encontre -1 e saia do laço 
*/