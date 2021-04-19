// Utilizando notação literal ({ })
const obj1 = {}
console.log(obj1) // {}

/**
 * Utilizando o inicializador new Object()
 * Obs: Não é obrigatório o uso de parênteses para inicializar o objeto
*/
const obj2 = new Object
console.log(obj2) // {}
console.log(typeof Object, typeof new Object) // Function, object

/**
 * Utilizando funções construtoras
 * 
 * Observações:
 * 1. Precisam ser instanciadas pelo operador new, o this dentro destas funções
 * é referenciado ao objeto criado a partir delas mesmas
 * 2. Servem de molde para a criação de objetos
*/
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.preco = preco
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Cadeira Gamer', 649.50, 0.15)
console.log(p1) // Produto { nome: 'Cadeira Gamer', preco: 649.5, getPrecoComDesconto: [Function (anonymous)] }
console.log(p1.getPrecoComDesconto()) // 584.5500000000001

/**
 * Utilizando funções factory:
 *
 * Úteis para reduzir a criação de objetos através de variáveis.
 *
 * @example const product1 = { name: 'TV', price: 250 }
 * @example const product2 = { name: 'PC', price: 450 }
*/
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('André', 7500, 10)
console.log(f1) // { nome: 'André', salario: 7500, faltas: 10, getSalario: [Function: getSalario] }
console.log(f1.getSalario()) // 5000

// Object.create()
const Carro = Object.create
Carro.nome = 'Idea'
Carro.marca = 'Fiat'
console.log(Carro) // { nome: 'Idea', marca: 'Fiat' }