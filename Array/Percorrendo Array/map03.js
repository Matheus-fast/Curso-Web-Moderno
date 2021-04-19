/**
 * Exercício de simulação do map, associando uma função no prototype 
 * de Array chamada MapEachOne, onde essa função recebe um callback e, para 
 * cada iteração do array, o callback é chamado e recebe 3 parâmetros 
*/

Array.prototype.MapEachOne = function (callback) {
    const arr = []
    for (
        let i = 0;
        i < this.length;
        i++
    ) /* Adicionando dentro do novo array o elemento transformado a partir da chamada do callback */ {
        arr.push(callback(this[i], i, this))
    }
    return arr
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const paraObjeto = json => JSON.parse(json) 
const apenasPreco = produto => produto.preco

const resultado = carrinho
    .MapEachOne(paraObjeto)
    .MapEachOne(apenasPreco)

console.log(resultado) // [ 3.45, 13.9, 41.22, 7.5 ]