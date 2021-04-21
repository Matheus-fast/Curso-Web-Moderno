/**
 * O objetivo real é tentar controlar o parser de uma template string a partir 
 * de uma função 
*/

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` // Se não for um número, retorne o próprio valor...
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11

console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`) // 1x de R$29.90 ou 3x de R$11.00