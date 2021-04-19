/**
 * Formas de se passar parâmetros padrões antes do ES2015 e com o ES2015 
 * 
 * 1º Estratégia: Utilizando o operador OU (||)
 * 2º, 3º e 4º Estratégia: Utilizando operadores ternários
 * 5º Estratégia: Valor padrão com ES2015
*/

// 1º 
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c // O valor estará setado, ou para os valores passados ou para 1
}

console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0 )) // 3 5 6 3

// 2º, 3º, 4º
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // Caso "a" seja diferente de undefined, pegue o seu valor, caso "a" seja igual a undefined, 'a = 1'
    b = 1 in arguments ? b : 1 // Caso exista o índice '1' dentro do array arguments, pegue o valor de "b" ou o valor padrão, '1'
    c = isNaN(c) ? 1 : c // Caso "c" não seja um número, retorne o valor padrão ('1'), caso seja um número, retorne o valor de "c"

    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0)) // 3, 5, 6, 0

// 5º
function soma3(a = 1, b = 1, c = 1) { // Caso não seja passado um valor, já se é assumido o valor '1'
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0)) // 3, 5, 6, 0