/**
 * Executa uma função reducer (fornecida por você) para cada
 * elemento do array, resultando num único valor de retorno. 
*/
const array = [1, 2, 3, 4]
const reducer = (acumulador, valorAtual) => acumulador + valorAtual

console.log(array.reduce(reducer))
console.log(array.reduce(reducer, 5)) // 15

/**
 * A função reducer recebe 4 params:
 * 1. Acumulador - Valor inicial
 * 2. Valor atual - Valor do elemento atual
 * 3. Índice atual - 
 * 4. Array original -
 * 
 * O valor de retorno da função reducer é atribuída ao acumulador. O acumulador,
 * com seu valor atualizado, é repassado para cada iteração subsequente pelo array,
 * que por fim, se tornará o valor resultante.
 */

let result1 = [0, 1, 2, 3].reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual
}, 0) // 0 conta como o valor inicial

console.log(result1) // 6

var result2 = [0, 1, 2, 3].reduce((acumulador, valorAtual) => { acumulador + valorAtual }, 0)

console.log(result2) // 6

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'André', nota: 9.8, bolsista: false },
    { nome: 'Roberto', nota: 8.4, bolsista: true },
]

const resultado = alunos
    .map(a => a.nota)
    .reduce(
        function (acumulador, valorAtual) {
            console.log(acumulador, valorAtual)
            return acumulador + valorAtual
        }, 10 // Passando um valor inicial após a callback
    )

console.log(resultado)
/**
 * 10 7.3
 * 17.3 9.2
 * 26.5 9.8
 * 36.3 8.4
 * 43.6
*/