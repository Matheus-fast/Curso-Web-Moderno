/**
 * O laço for of itera sobre valores
 * O laço for of percorre dados iterativos (Array, Map, Set, arguments, etc),
 * chamando uma função personalizada com instruções a serem executadas para
 * o valor de cada objeto distinto. 
 * 
 * @syntax for (variavel of iteravel) { ... }
 * 
 * @variavel A cada iteração, um valor de uma propriedade diferente é atribuído à variavel
 * @iteravel Objetos cujos atributos serão iterados
 * 
 * É possível utilizar const ao invés de let para a declaração da variável, caso não
 * haja modificações dentro do bloco
*/

// Array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (const value of array) {
    if (value % 2 === 0) {
        console.log(value) // Todos os valores pares serão impressos
    } else if (value % 3 === 0) {
        console.log(value) // Todos os valores ímpares serão impressos
    }
}

// String
let string = "Boo"

for (const value of string) {
    console.log(value) // "B" "o" "o"
}

// Map
let map = new Map([["a", 1], ["b", 2], ["c", 3]])

for (let entry of map) {
    console.log(entry) // [ 'a', 1 ] [ 'b', 2 ] [ 'c', 3 ]
}

// Set
let set = new Set([1, 1, 2, 2, 3, 3])

for (let value of set) {
    console.log(value) // 1 2 3
}

