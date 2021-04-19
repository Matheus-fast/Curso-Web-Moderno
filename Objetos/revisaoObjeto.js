/**
 * Nada mais é do que uma coleção dinâmica de pares chaves/valor 
 * 
 * Formas de se inicializar um objeto:
 * 1. new Object()
 * 2. Object.create()
 * 3. ({ }) - Notação literal
*/

const Produto = new Object
Produto.nome = 'Cadeira'
Produto['marca do produto'] = 'Genérica'
Produto.preco = 200

console.log(Produto) // { nome: 'Cadeira', 'marca do produto': 'Genérica', preco: 200 }

const Carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Matheus',
        idade: 20,
        endereco: {
            logradouro: 'Rua Japuaça',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //...
    }
}

Carro.proprietario.endereco.numero = 1000
Carro['proprietario']['endereco']['logradouro'] = 'Rua ABC'

console.log(Carro)
