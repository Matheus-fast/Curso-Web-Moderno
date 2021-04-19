/**
 * Utilizando o mesmo exemplo da aula VarEmLoop2.js 
 * 
 * Pelo fato de let possuir escopo de bloco, no momento em que a função foi 
 * definida, o valor de 'i' será guardado naquele momento
*/

const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // 2
funcs[8]() // 8