/**
 * Formas diferentes de se declarar funções e curiosidades sobre
 * estas formas e seus impactos dependendo do método de criação 
 * 
 * 1. Function Declaration
 * Forma tradicional de se criar funções em JS
 * Utilizando ESTA forma, é possível chamá-la antes mesmo de sua declaração
 * 
 * 2. Function Expression
 * Declarar uma função e atribuí-la à uma variável ou constante
 * 
 * 3. Named Function Expression
 * Além de possuir uma constante que armazenará uma função, esta será nomeada
*/

// 1
console.log(soma(5, 6)) // 11

function soma(x, y) {
    return x + y
}

// 2
const sub = function (x, y) {
    return x - y
}

// 3
const mult = function mult(x, y) {
    return x * y
}