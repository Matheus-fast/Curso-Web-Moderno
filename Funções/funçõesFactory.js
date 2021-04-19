/**
 * Função fábrica onde, ao final, retornará um objeto de forma literal.
 * Útil para evitar a criação de variáveis para criar objetos
*/

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

const Pessoa = criarPessoa('Joao', 'Silva', 22)
console.log(Pessoa) // { nome: 'Joao', sobrenome: 'Silva', idade: 22 }

function criarProduto(nome, preco, desconto = 0.1) {
    return {
        nome, 
        preco,
        getValorComDesconto() {
            return Math.floor(preco * desconto)
        }
    }
}

const Produto = criarProduto('Notebook', 2600, 0.5)
console.log(Produto) // { nome: 'Notebook', preco: 2599, desconto: 0.5 }
console.log(Produto.getValorComDesconto()) // 1300