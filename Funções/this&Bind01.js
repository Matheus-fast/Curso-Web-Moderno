/**
 * This pode variar!
 * Utilizando o bind para possuir um controle maior sobre o this
*/

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) 
        // Acessando 'saudacao' do objeto dono da função, "pessoa"
        // Ao remover o this, gera-se o erro 'saudacao is not defined'
    }
}

pessoa.falar() // Bom dia! 

const falar = pessoa.falar
falar() // Undefined

/**
 * Por que gerou undefined?
 * R: 'saudacao' está apontando para um this diferente, não sendo mais o objeto pessoa, 
 * e, o novo objeto apontado pela função falar, não possui 'saudacao' dentro dele.
 * 
 * Como resolver?
 * R: Utilizar o bind, onde se é passado um objeto para o this ter como referência.
 * É o método responsável por "amarrar" determinado objeto para ele se tornar o dono
 * da execução
*/

const falarDePessoa = pessoa.falar.bind(pessoa) 
// Passando 'pessoa' como argumento para a função bind, significa que sempre, a partir desta funcao,
// o this será resolvido para 'pessoa'

falarDePessoa() // Bom dia!
