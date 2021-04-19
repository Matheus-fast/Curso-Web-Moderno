/**
 * Explicando como é possível criar objetos a partir de constantes
 * e, mesmo tendo sido criado através de uma CONSTANTE, alterar seus valores.
 * 
 * O identificador Pessoa possui dentro de si um endereço de memória e, dentro desse
 * endereço, é onde se tem a criação do objeto, então, a constante Pessoa aponta somente
 * para o endereço
 * 
 * Pessoa -> endereço 123 -> { object }
 * 
 * Ao atribuir um novo valor para o objeto, como Pessoa.idade = '20', não se é mudado 
 * a referência da constante (o endereço) mas sim, o objeto ( { object } ).
*/

const Pessoa = { 
    nome: 'João'
}

/**
 * Exemplo para tentar apontar à um novo endereço, ou seja, fazer com que o endereço 123 
 * seja alterado para 456.
 * 
 * Um erro é gerado no console: TypeError: Assignment to constant variable.
*/

// Pessoa = {
//     nome: 'Ana'
// }

/**
 * Uma alternativa para evitar a tentativa de atribuição de um novo endereço à objetos 
 * criados a partir de variáveis constantes, é utilizar Object.freeze()  
*/

Object.freeze(Pessoa)
Pessoa.nome = 'Ana'
console.log(Pessoa) // { nome: 'João' }