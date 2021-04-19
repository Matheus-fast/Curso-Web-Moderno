const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Desafio: Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) // Transformando texto para objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho
    .map(paraObjeto)
    .map(apenasPreco)

console.log(resultado) // [ 3.45, 13.9, 41.22, 7.5 ]