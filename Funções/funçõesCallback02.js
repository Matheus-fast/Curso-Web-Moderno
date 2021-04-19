/**
 * Diferença entre o uso de callbacks em uma função no JS e
 * a implementação de uma função sem o uso de callbacks.
 * 
 * O exemplo abaixo tem como objetivos gerar um novo array com 
 * todas as notas menores que 7: 
 * 1. Não utilizando callbacks 
 * 
 * 2. Utilizando callbacks com a opção .filter, que irá filtrar os elementos
 * de um array em cima de um determinado critério, sendo uma função callback que 
 * retornará true ou false, ou seja, caso a função retorne true, o elemento deve 
 * ser adicionado no array que será gerado.
*/

// Ex. 1:
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas) // [ 6.5, 5.2, 3.6 ]

// Ex. 2:
const notasBaixas2 = notas.filter(function (nota) {
    return nota <= 7 // Se a nota for menor que 7, retornará true e o elemento constará no array final
})

console.log(notasBaixas2) // [ 6.5, 5.2, 3.6 ]

// Uma forma mais esperta ainda...
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3) // [ 6.5, 5.2, 3.6 ]