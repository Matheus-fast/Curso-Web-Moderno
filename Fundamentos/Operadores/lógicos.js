/**
 * Utilizados tipicamente com valores booleanos.
 * 
 * Os operadores && e || retornam o valor de um dos operandos
 * especificados, de forma que se esses operadores forem utilizados
 * com valores não-booleanos, eles possam retornar um valor também
 * não-booleano.
 * 
 * Operadores:
 * 1. AND lógico (&&) - expr1 && expr2: 
 * Retorna verdadeiro caso ambas as expressões sejam verdadeiras
 * 
 * 2. OU lógico (||) - expr1 || expr2:
 * Quando utilizado com valores booleanos, retorna verdadeiro caso ambas
 * as expressões sejam verdadeiras  
 * 
 * 3. NOT lógico (!) - !expr:
 * Retorna falso caso o único operando possa ser convertido para verdadeiro
*/

function GoShopping(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(GoShopping(true, true)) // { comprarSorvete: true, comprarTv50: true, comprarTv32: false, manterSaudavel: false }
console.log(GoShopping(true, false)) // { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(GoShopping(false, true)) // { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(GoShopping(false, false)) // { comprarSorvete: false, comprarTv50: false, comprarTv32: false, manterSaudavel: true }

/**
 * Observações:
 * true && true -> true
 * true && false -> false
 * false && false -> false
 * 
 * true || ? -> true
 * false || true -> true
 * false || false -> false
 * 
 * v ! v -> false
 * v ! f -> true
 * f ! v -> true
 * f ! f -> false
*/

