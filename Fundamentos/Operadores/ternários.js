/**
 * Operação que utiliza três operandos 
 * 
 * @syntax condition ? expr1 : expr2
 * 
 * A resposta de um operador ternário é retornar um dos dois
 * valores e, inclusive, é possível armazenar esta em uma
 * variável
*/

const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"

console.log(resultado(7.1)) // Aprovado
console.log(resultado(6.9)) // Reprovado
