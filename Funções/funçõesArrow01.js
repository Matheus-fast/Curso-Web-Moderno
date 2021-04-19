/**
 * Objetivos:
 * 1. Ser mais curta e possuir uma sintaxe mais reduzida
 * 2. Sua criação foi motivada a partir de possuir um this associado
 * ao contexto no qual a função foi declarada
 * 
 * Observações:
 * 1. Sempre é uma função anônima, caso queira chamá-la posteriormente
 * deve-se armazená-la em uma variável
 * 2. Não é obrigatório utilizar parênteses ao passar somente um parâmetro
 * 3. Ao remover o corpo da função, tem-se um retorno implícito (única linha)
 */

// Função tradicional
let dobro = function (a) {
    return 2 * a
}

// Arrow function
dobro = (a) => {
    return 2 * a
}

// Observação 3
dobro = a => 2 * a
console.log(dobro(Math.PI)) //  6.28781721

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um parâmetro
console.log(ola()) // Olá