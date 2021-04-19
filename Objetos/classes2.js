/**
 * Nada mais é que uma forma diferente de escrever uma função em JS,
 * no final ela será convertida para função e a herança continuará
 * sendo via prototype.
 * 
 * Mostrando relação de herança entre 3 classes
 * Sobrescrevendo o exemplo dado em Objetos > Heranças > Herança1.js
*/

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

/**
 * Forma disponível para definir que a classe Pai terá a classe Avo como protótipo,
 * ou então, que determinada função gerada a partir da classe Pai terá como protótipo uma outra
 * função gerada a partir da classe Avo 
*/
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        /**
         * super() - Instanciar a função construtora da classe (Pai) da super-classe (Avo), ou seja,
         * faz referência ao construtor(sobrenome) invocado na classe Avo
         */
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
        /**
         * Valor 'Silva' foi passado ao constructor da classe Pai e esse valor foi passado
         * ao super desta, que faz referência ao constructor da classe Avo, recebendo this.sobrenome
         * como 'Silva'
        */
    }
}

const filho = new Filho
console.log(filho) // Filho { sobrenome: 'Silva', profissao: 'Professor' }