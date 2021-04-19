/**
 * Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
 * pares e que também tenham índices pares.
 * Exemplos:
 * receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
 * receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
 */

function receberSomenteOsParesDeIndicesPares(val) {
    let resultado = []
    for (
        let i = 0;
        i < val.length;
        i += 2
    ) {
        const numPar = val[i] % 2 === 0
        
        if (numPar) {
            resultado.push(val[i])
        }
    }

    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // [ 10, 22 ]