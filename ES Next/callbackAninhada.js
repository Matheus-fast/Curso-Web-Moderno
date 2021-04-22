/**
 * Exemplo de código que gerará um desconforto em sua construção por conta
 * da estratégia de callback que será mostrada 
*/

// Sem promise
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => { // A resposta obtida serão dados que chegarão de forma parcial
        let resultado = ''

        res.on('data', dados => { // Interceptando o evento de resposta chamado 'data', e cada um dos dados que forem chegando serão concatenados à resultado
            resultado += dados
        })

        res.on('end', () => { // Quando todos os dados tiverem chego, o evento 'end' será disparado, onde o dado (JSON) será convertido para objeto (JSON.parse)
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))

    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `Turma B: ${b.nome}`))

        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `Turma C: ${c.nome}`))
            console.log(nomes) // Lista de alunos das turmas
        })
    })
})