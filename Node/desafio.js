/**
 * Entre a lista gerada a partir da url, obtenha a mulher chinesa com o menor salário. 
 * Serão 500 funcionários, onde cada um possui id, nome, sobrenome, email, genero, 
 * cidade, país, empresa e salário.
*/

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const nacionalidade = m => m.pais === 'China'
    const genero = m => m.genero === 'F'
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

    // Mulher chinesa com menor salário
    const func = funcionarios
        .filter(nacionalidade)
        .filter(genero)
        .reduce(menorSalario)

    console.log(func) // { id: 443, nome: 'Shela', sobrenome: 'Nowell', email: 'snowellca@upenn.edu', genero: 'F', cidade: 'Yufa', pais: 'China', empresa: 'Quinu', salario: 2435.61 }
})
