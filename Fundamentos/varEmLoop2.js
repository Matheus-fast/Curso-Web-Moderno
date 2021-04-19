/**
 * Pelo fato de 'var' não possuir escopo de bloco, ao executar o código,
 * o resultado será 10 para qualquer chamada da função. 
*/
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// Para cada nova iteração, será adicionado uma nova função ao array e esta
// imprimirá a variável i

funcs[2]() // 10
funcs[8]() // 10