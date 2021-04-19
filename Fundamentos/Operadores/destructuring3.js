/**
 * Utilizando o operador destructuring no âmbito de uma função 
*/

// Não significa que é um objeto, significa que um objeto será passado
// pra essa função e, dentro desta, já sejam removidos os atributos min e max
// desse objeto 

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) // Valores entre 40 e 50

console.log(rand({ min: 955 })) // Valores entre 955 e 1000 
console.log(rand({})) // Passando um objeto vazio / Valores entre 0 e 1000 (valor padrão atribuído)

console.log(rand()) // Gerará um erro, pois, estará tentando desestruturar algo que está indefinido