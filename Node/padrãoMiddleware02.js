/**
 * Middleware pattern (chain of responsibility)
 * 
 * @param {*} context Objeto que será passado de um middleware para outro 
 * @param {*} next Ao ser chamada, dispará o próximo passo na cadeia
 */

const passo1 = (context, next) => {
    context.valor1 = 'middleware1'
    next()
}

const passo2 = (context, next) => {
    context.valor2 = 'middleware2'
    next()
}

const passo3 = context => context.valor3 = 'middleware3'

const exec = (context, ...middlewares) => { // Utilizando o operador rest (...), onde passa-se várias funções e estas serão armazenadas dentro de um array
    const execPasso = indice => { // Para executar cada um dos passos, será passado como atributo o indice desejado (0, 1, 2, ...) 
        middlewares && indice < middlewares.length &&  // Verificando se, de fato, o array está definido e se o indice é menor que o tamanho do array, se sim, execute...
            middlewares[indice](context, () => execPasso(indice + 1)) // A função next está presente como uma função inline do tipo arrow 
    }
    execPasso(0) // Quando a função exec for chamada, começará a partir do 0 e dispará o processo de execução dos passos seguintes
}

const ctx = {}
exec(ctx, passo1, passo2, passo3) // É possível alterar a posição dos passos ou suprimir um passo 

console.log(ctx) // { valor1: 'middleware1', valor2: 'middleware2', valor3: 'middleware3' }