/**
 * Funções anônimas nada mais são do que funções que não recebem um nome 
 * Exemplos:
*/

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // 7
imprimirResultado(3, 4, soma) // 7
imprimirResultado(3, 4, function (x, y) {
    return x - y
}) // -1
imprimirResultado(3, 4, (x, y) => x * y) // 12 / Funções arrow são anônimas

const pessoa = {
    falar() {
        console.log('Olá')
    }
}

pessoa.falar() // Olá