/**
 * É um objeto onde, ao invés de organizar seus atributos a partir de 
 * chaves/identificadores, ele organiza a partir do índice, começando do elemento 0.
 * 
 * É uma boa prática trabalhar com dados heterogêneos em um array, ou seja, 
 * sem misturar dados, como inteiros, number, strings, etc. 
 * 
 * @syntax [element0, element1, ..., elementN]
 * @syntax new Array(element0, element1, ..., elementN)
 * @syntax new Array(arrayLength)
*/

console.log(typeof Array, typeof new Array, typeof []) // function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Não é muito recomendado, porém é válido
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]
