/**
 * Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
 * Exemplos: 
 * somarNumeros([10, 10, 10]) // retornará 30
 * somarNumeros([15, 15, 15, 15]) // retornará 60
 */

function somarNumeros(nums) {
    const soma = nums.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    return soma
}

console.log(somarNumeros([10, 10, 10])) // 30
console.log(somarNumeros([15, 15, 15, 15])) // 60