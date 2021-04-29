/**
 * Ao criar Promises, se terá uma promessa de algo que será executado e devolvido no 
 * futuro, ou seja, associado a uma Promise, uma resposta será dada, seja um valor numérico, 
 * uma string, o conteúdo de um arquivo, uma resposta de uma requisição, etc. 
 * Para essa resposta ser gerada, é preciso passar uma função como parâmetro para a Promise
 * 
 * Vantagens que a Promise acrescenta em um código pelo fato de ter uma capacidade
 * de compor melhor várias chamadas sem ter o aninhamento causado por callbacks: 
 * 1. Fazer diversos processamentos a partir da chamada do método .then()
 * 2. É possível criar funções/funções arrow para serem passadas ao método then, ao invés de serem 
 * criados métodos anônimos dentro do método
*/

let promise = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carol', 'Carlos'])
})

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

promise // Vantagens: 1
    .then(primeiroElemento) // Ana
    .then(primeiraLetra) // Letra A
    .then(letraMinuscula) // A minúsculo
    .then(console.log) // a / Será impresso aquilo que ele recebeu como parâmetro, já que o .then() recebe apenas um único parâmetro