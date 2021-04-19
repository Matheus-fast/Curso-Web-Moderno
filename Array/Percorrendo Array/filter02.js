/**
 * Exercício de simulação do filter, associando uma função no prototype 
 * de Array chamada filterEachOne, onde essa função recebe um callback e, para 
 * cada iteração do array, o callback é chamado e recebe 3 parâmetros
*/
Array.prototype.filterEachOne = function (callback) {
    const arr = []
    for (
        let i = 0;
        i < this.length;
        i++
    ) {
        if (callback(this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 19.99, fragil: false }
]

const isExpensive = produto => produto.preco >= 500
const isFragile = produto => produto.fragil

const filter = produtos
    .filterEachOne(isExpensive)
    .filterEachOne(isFragile)

console.log(filter) // [ { nome: 'Notebook', preco: 2499, fragil: true }, { nome: 'iPad Pro', preco: 4199, fragil: true } ]