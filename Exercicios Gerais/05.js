/**
 * Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
 * Exemplos:
 * maiorOuIgual(0, 0) // retornará true
 * maiorOuIgual(0, "0") // retornará fals 
*/

function maiorOuIgual(num1, num2) {
    if (typeof num1 != typeof num2) {
        return false
    }

    return num1 >= num2
}

console.log(maiorOuIgual(0, 1)) // False
console.log(maiorOuIgual(0, "0")) // False
console.log(maiorOuIgual(6, 2)) // True
