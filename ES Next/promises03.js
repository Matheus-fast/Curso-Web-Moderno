/**
 * Exercicios relacionados à Promises
*/

setTimeout(() => {
    console.log('Executando callback...')

    setTimeout(() => {
        console.log('Executando callback...')

        setTimeout(() => {
            console.log('Executando callback...')

        }, 2000);
    }, 2000);
}, 2000);

// Como fazer utilizando Promise

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) { // Função que resolverá a promessa
        setTimeout(function () {
            console.log('Executando Promise...')
            resolve()
        }, tempo)
    })
}

esperarPor() // Esperar 2s
    .then(() => esperarPor(3000)) // Esperar 3s
    .then(esperarPor) // Esperar 2s