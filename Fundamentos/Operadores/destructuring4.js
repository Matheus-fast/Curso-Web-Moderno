/**
 * Utilizando o operador destructuring no âmbito de um array
*/

function rand([min = 0, max = 1000]) {
    if (min > max) {
        [min, max] = [max, min] // O que é mínimo passa a ser máximo e vice-versa
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Não está claro qual o valor máximo e qual o mínimo
console.log(rand([50, 40])) // Valores entre 40 e 50
console.log(rand([992])) // Valores entre 992 e 1000
console.log(rand([, 10])) // Valores entre 0 e 10
console.log(rand([])) // Valores entre 0 e 1000
console.log(rand()) // Não é possível ler propriedades de algo indefinido