/**
 * Restringindo a liberdade de dados de objetos, para conseguir um
 * pouco mais de previsibilidade em um objeto esperado.
 * 
 * @method Object.preventExtensions()
 * Não irá permitir que o objeto seja extendido, não receba novos atributos
 * É possível alterar/deletar o valor de atributos já existentes
 * 
 * @method Object.isExtensible()
 * Verifica se um objeto foi criado a partir do método preventExtensions()
 * 
 * @method Object.seal()
 * Não irá permitir adicionar novos atributos à um objeto ou excluir,
 * mas é possível modificar os valores de atributos
 * 
 * @method Object.isSealed()
 * Verifica se o objeto está selado ou não
*/

// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.00,
    tag: 'promoção'
})

// Object.isExtensible
console.log('Extensível:', Object.isExtensible(produto)) // False

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) // { nome: 'Borracha', preco: 1 }

// Object.seal
const Pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(Pessoa)
console.log('Selado:', Object.isSealed(Pessoa)) // True