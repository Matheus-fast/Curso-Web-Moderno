/**
 * Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
 * multiplicação deles. Porém, não utilize o operador de mutiplicação.
 * Exemplo:
 * multiplicar(5, 5) // retornará 25
 * multiplicar(0, 7) // retornará 0 
*/

function multiplicar(num1, num2) {
    let resultado = 0
    for (
        let i = 0;
        i < num2;
        i++
    ) {
        resultado += num1
    }
    return resultado
}

console.log(multiplicar(2, 3)) // 6
console.log(multiplicar(5, 5)) // 25