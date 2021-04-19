/**
 * Utilizado para filtrar um array e gerar um sub-array; uma quantidade
 * de elementos menores baseados em algum critério de filtro 
 * 
 * Normalmente, o array final é menor do que o original
 * 
 * @param callback [element, index, array]
 * @param this
 * 
 * Obs:
 * Utilizando map, o resultado é o elemento transformado,
 * utilizando filter, true ou false
*/
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 19.99, fragil: false }
]

// Função filter propriamente dita
const filtering = produtos.filter(function (p) {
    return p.preco > 30 // Caso retorne falso, não estará presente no array final, caso contrário, estará
})

console.log(filtering) // [ { nome: 'Notebook', preco: 2499, fragil: true }, { nome: 'iPad Pro', preco: 4199, fragil: true } ]


// Criando funções para retornar produtos dependendo de dois critérios: fragilidade e preço
const isExpensive = produto => produto.preco >= 500
const isFragile = produto => produto.fragil

const filter = produtos
    .filter(isExpensive)
    .filter(isFragile)

console.log(filter) // [ { nome: 'Notebook', preco: 2499, fragil: true }, { nome: 'iPad Pro', preco: 4199, fragil: true } ]
