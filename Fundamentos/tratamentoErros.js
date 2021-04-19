/**
 * @method try
 * Permite a execução de um código, onde, potencional, há a chance
 * de encontrar erros
 * 
 * @method catch 
 * Permite o tratamento de erros que podem ser encontrados dentro
 * do bloco de execução try
 * 
 * @method throw
 * Método para conseguir lançar o erro no console de formas variadas
 * 
 * @method finally
 * É um bloco que será executado mesmo que haja erros ou não no código
 */

function tratarErro(error) {
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date()
    }
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') //
    } catch (error) {
        tratarErro(error) // { nome: 'TypeError', msg: "Cannot read property 'toUpperCase' of undefined", date: 2021-04-03T17:40:38.406Z }
    } finally {
        console.log('Parando execução')
    }
}

const obj = { nome: 'Roberto' } // Neste objeto, foi passado a propriedade 'nome' e não 'name', por isso o erro foi gerado
imprimirNome(obj)