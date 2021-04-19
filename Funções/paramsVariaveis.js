/**
 * Parâmetros podem ser variáveis dentro de funções em JS 
 * 
 * O fato de funções não receberem nenhum parâmetro, não significa 
 * que não seja possível passar parâmetros.
 * Dentro de funções, estes parâmetros podem ser recuperados através 
 * da propriedade 'arguments', um array interno de uma função, que possui
 * todos os argumentos que foram passados.
*/

function soma() {
    let soma = 0 // Valor inicial
    for (i in arguments) { // Pegando o índice de cada elemento do array, quando nenhum parâmetro é passado este array está vazio
        soma += arguments[i]
    }
    return soma // Retornando o resultado de todos os parâmetros passados
}

console.log(soma(1)) // 1
console.log(soma(1, 2, 3, 4, 5, 5)) // 15
console.log(soma(1, 2, 3, 4, 5, 5, 'Testar')) // 20Testar
console.log(soma('a', 'b', 'c', 'd')) // 0abcd