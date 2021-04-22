/**
 * Refatorando o exemplo dado no arquivo callbackAninhada.js01 
*/

// Com promise
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

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // É possível passar varias promises e, quando todas forem resolvidas, a cadeia dos métodos .then serão chamadas
    .then(turmas => [].concat(...turmas)) // Concatenando a matriz das turmas à um array 
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes)) // Um array de nomes será imprimido
    .catch(e => console.log(e.message)) // Sempre que trabalhar com Promise, é importante fazer o tratamento de erro

// Forçando um erro
getTurma('D').catch(e => console.log(e.message)) // Unexpected token < in JSON at position 0, pois, o resultado da promise não veio como JSON