/**
 * Classe é uma forma diferente de se construir funções em JS e, a partir dela,
 * inicia-se o processo de instanciamento de objetos. 
 *
 * Exemplificando a criação de objetos utilizando classe e funções
 *   
 * _Conceitos de classe presentes no capítulo de Objetos_  
*/

// Classe...
class Pessoa {
    constructor(nome) { // Responsável por inicializar as variáveis
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
// João foi passado para o construtor da classe e, ao usar this.nome, essa variável passou a ser pública, ou seja,
// se terá acesso a essa variável sempre a partir da instância dessa classe, no caso, p1.nome

p1.falar() // 'Meu nome é João'


// Função factory...
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
        // Não foi preciso acessar a variável nome usando this, pois, esse objeto tem ciência
        // do contexto léxico o qual ele foi declarado, ou seja, ele entende que foi criado dentro de 
        // uma função e possui um escopo mais abrangente, podendo acessar o método no qual ele foi criado
    }
}

const p2 = criarPessoa('João')
p2.falar() // 'Meu nome é João'


// Função construtora...
function criarAluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    this.resultadoFinal = function () {
        if (nota >= 7) {
            return `${this.nome} foi aprovado com nota ${this.nota}.`
        } else {
            return `${this.nome} foi reprovado com a nota ${this.nota}.`
        }
    }
}

const Aluno = new criarAluno('André Pereira', 8)
console.log(Aluno) // criarAluno { nome: 'André Pereira', nota: 8 }
console.log(Aluno.resultadoFinal()) // 'André Pereira foi aprovado com a nota 8