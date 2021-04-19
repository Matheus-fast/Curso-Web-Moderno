/**
 * A declaração 'break' é uma palavra reservada da estrutura switch, utilizada
 * para sair de um loop, causando desvio de fluxo.
 * 
 * Já a declaração 'continue' é uma instrução para pular uma iteração do loop 
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in array) {
    if (x == 5) { // Ao encontrar o indice 5, pare
        break 
    }
    console.log(`${x} = ${array[x]}`) // 0 = 1, 1= 2, 2 = 3, 3 = 4, 4 = 5
}

for (y in array) {
    if (y == 5) {
        continue // Irá interromper o laço corrente e seguirá para a próxima repetição
    }
    console.log(`${y} = ${array[y]}`) //0 = 1, 1 = 2, 2 = 3, 3 = 4, 4 = 5, 5 = 6, 6 = 7, 7 = 8, 8 = 9, 9 = 10
}