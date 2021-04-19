/**
 * Funções construtoras em JS são como as classes do Java, diferenciadas
 * apenas pela sintaxe. Servem de molde para a criação de objetos. 
*/

function Carro(velMax = 200, delta = 5) {
    // atributo privado, que pertence apenas à esta função e não será possível ter seu valor modificado
    let velAtual = 0

    // método público, utilizando this
    this.acelerar = function () {
        if (velAtual + delta <= velMax) {
            velAtual += delta // Acrescentando à velocidade atual o valor de delta, 5
        } else {
            velAtual = velMax
        }
    }

    // método público, que será responsável por pegar a velocidade atual
    this.getVelAtual = function () {
        return velAtual
    }
}

const Uno = new Carro
Uno.acelerar()
console.log(Uno.getVelAtual()) // 5

const Ferrari = new Carro(350, 20)
Ferrari.acelerar()
console.log(Ferrari.getVelAtual()) // 20

/**
 * Normalmente, funções construtoras não têm return, já que tudo o que lhes
 * é informado é passado ao this.
 * 
 * Havendo return, dois comportamentos são esperados:
 * 1. Se o return for chamado com um objeto, ele irá retornar no lugar do this
 * 2. Se o return for vazio ou seguido de um valor primitivo, ele será ignorado
*/

// 1
function criarAluno() {
    this.nome = 'Miguel'

    return {
        nome: 'Alexa' // Este será o objeto retornado
    }
}

const Aluno = new criarAluno
console.log(Aluno.nome) // Alexa

// 2
function criarAluno2() {
    this.nome = 'Miguel'

    return // Vazio
}

const Aluno2 = new criarAluno2
console.log(Aluno2.nome) // Miguel