/**
 * Revisão sobre as mudanças que ocorreram nas novas versões do Ecma Script 
*/

// let e const
{
    var a = 1 // Escopo de função ou global
    let b = 2 // Escopo de bloco

    console.log(b) // 2
}
console.log(a) // 1
// console.log(b) - b is not defined - Erro gerado por não estar no mesmo escopo

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`) // iPad é caro!

// Destructuring
const [b, c, ...yzs] = 'Cod3r'
console.log(b, c, yzs) // C o [ 'd', '3', 'r' ]

const [x, y] = [1, 2]
console.log(x, y) // 1, 2

const { idade: i, nome: n } = { nome: 'Ana', idade: 20 }
console.log(`${n} tem ${i} anos.`) // Ana tem 20 anos.