/**
 * Operadores artiméticos são binários, ou seja, trabalham em cima de dois operandos 
*/

const [a, b, c, d] = [3, 5, 1, 15]

// operando1 (a + b) + operando2 (c + d)
const somar = a + b + c + d 
const subtrair = d - b
const multiplicar = a * b
const dividir = d / a
const modular = a % 2 

console.log(somar, subtrair, multiplicar, dividir, modular) // 24, 10, 15, 5, 1

