/**
 * Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
 * 📕 Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
 * desconsidere também dias decorridos desde o último aniversário.
 * Exemplos:
 * converterIdadeEmAnosParaDias(25) // retornará 9125
 * converterIdadeEmAnosParaDias(70) // retornará 25550
*/

function converter(idade) {
    const diasDoAno = 365
    return diasDoAno * idade
}
console.log(converter(38)) // 13870

function converterIdadeEmAnosParaDias(pessoa, idade) {
    this.pessoa = pessoa
    this.idade = idade

    let conversor = 365 * this.idade

    this.conversao = function () {
        return `${this.pessoa} tem ${conversor} dias de vida.`
    }
}
const Pessoa = new converterIdadeEmAnosParaDias("Gabriel", 25)
console.log(Pessoa.conversao()) // Gabriel tem 9215 dias de vida.