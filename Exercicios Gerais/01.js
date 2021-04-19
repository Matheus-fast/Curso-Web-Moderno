/**
 * Crie uma função que retorna a string "Olá, " concatenada com um argumento text 
 * (a ser passado para a função) e com ponto de exclamação "!" no final.
 * Exemplos:
 * cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
 * cumprimentar("Maria") // retornará "Olá, Maria!"
*/

// 1
function criarPessoa(nome) {
    return `Olá, ${nome}!`
}
console.log(criarPessoa("André")) // Olá, André!

// 2
function Cumprimentar(nome) {
    return `Olá, ${nome}!`
}
console.log(Cumprimentar("Leonardo")) // Olá, Leonardo!

// 3
const Saudacao = nome => `Olá, ${nome}!`
console.log(Saudacao("Maria")) // Olá, Maria!