/**
 * Utilizados para relacionar dois valores de mesmo tipo primitivo
 * e o resultado de uma expressão relacional é um valor booleano
 * 
 * Operadores:
 * 1. == - Igual: Comparação de valor
 * 2. === - Estritamente Igual: Comparação de tipo
 * 3. != - Diferente de: Comparação de valor
 * 4. !== - Estritamente Diferente: Comparação de tipo
 * 5. > - Maior que: ...
 * 6. < - Menor que: ...
 * 7. >= - Maior ou Igual que: ...
 * 8. <= - Menor ou Igual que: ...
*/

console.log(`01) ${'1' == 1}`) // True

console.log(`02) ${'2' === 2}`) // False, pois, '1' é string e 1 é number

console.log(`03) ${'3' != 3}`) // False

console.log(`04) ${'4' !== 4}`) // True, são diferentes porque '4' é string e 4 é number
 
console.log(`05) ${5 > 3}`) // True

console.log(`06) ${6 < 5}`) // True

console.log(`07) ${7 >= 10}`) // False

console.log(`08) ${8 <= 5}`) // False

console.log(`09) ${undefined == null}`) // True
console.log(`09) ${undefined === null}`) // False