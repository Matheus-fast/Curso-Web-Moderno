/**
 * O objetivo de trabalhar com esse recurso é simplificar o uso de Promises
 * 
 * Sempre que se estiver trabalhando com funções que retornam uma Promise, pode-se
 * fazer uso do await, onde a função só passará para o próximo passo caso ela seja 
 * resolvida ou rejeitada.
 *  
 * Obs: 
 * 1. Quando se tem uma função assíncrona (async), ela retornará um objeto do tipo
 * AsyncFunction e, em cima desse objeto, é onde chamamos a função .then() para executar
 * 
 * Utilizando o mesmo exemplo dado em callbackAninhada.js.
*/

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

// Utilizando async e await
let obterAlunos = async () => {
    const turmaA = await getTurma('A') // Chamando a função getTurma e atribuindo à variável
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC) // Concatenação de todos os três arrays, gerando somente um
} // Obs 1

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes)) // Um array com todos os nomes foi gerado