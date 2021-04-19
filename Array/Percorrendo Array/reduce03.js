/**
 * Exercício de simulação do reduce, associando uma função no prototype 
 * de Array chamada ReduceEachOne, onde essa função recebe um callback e, para 
 * cada iteração do array, o callback é chamado e recebe 3 parâmetros
 */

Array.prototype.ReduceEachOne = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]

    for (
        let i = indiceInicial;
        i < this.length;
        i++
    ) {
        acumulador = callback(acumulador, this[i], i, this) // Valor inicial, elemento atual, índice, array atual
    }

    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.ReduceEachOne(soma)) // 21
console.log(nums.ReduceEachOne(soma, 21)) // 42