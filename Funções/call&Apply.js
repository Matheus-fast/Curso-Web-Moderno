/**
 * Duas formas diferente de se chamar funções em JS.
 * 
 * A diferença entre Call e Apply é a forma como os parâmetros são
 * passados na hora de invocar a função a partir destes métodos
 * 
 * @method Call
 * Passa-se diretamente os parâmetros que serão usados na função. O primeiro
 * parâmetro deve ser o contexto (pode estar nulo) e, depois, todos os parâmetros
 * que devem ser passados para a função.
 * 
 * @method Apply
 * Ao invés de passar diretamente os parâmetros, como em Call, os parâmetros serão passados
 * dentro de um array. O primeiro parâmetro deve ser o contexto e, depois, um array com todos
 * os parâmetros
*/

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4599,
    desc: 0.15,
    getPreco // Irá criar um atributo novo e associará à função 
}

console.log(getPreco()) // NaN, pois, o this em this.preco nao está definido, no contexto global

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // R$ 18
console.log(produto.getPreco()) // 3909.15

// Formas de executar a função a partir do Call e Apply
const Carro = {
    preco: 40599,
    desc: 0.10
}
console.log(getPreco.call(Carro)) // Chamando a função e passando como contexto de execução o objeto Carro / R$ 36539.1 
console.log(getPreco.apply(Carro)) // Também executará a função e usará o objeto passado como o this de execução / R$ 36539.1

console.log(getPreco.call(Carro, 0.18, '$')) // $ 43116.138
console.log(getPreco.apply(Carro, [0.18, '$'])) // $ 43116.138