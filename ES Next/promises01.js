/**
 * Promises são utilizadas quando há a vontade de se ter um processamento assíncrono.
 * 
 * Os "caminhos" mais naturais de uma Promise são:
 * 1. A promessa ser cumprida
 * 2. A promessa ser rejeitada
 * 
 * Ao se criar uma Promise (new Promise()), um objeto será criado
*/

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // Resolver, rejeitar
        setTimeout(() => {
            resolve(frase) // A frase não será imprimida, ela será recebida a partir de uma Promise
        }, segundos * 1000) // Esperar o tempo necessário, no caso, os segundos informados pelo usuário
    })   
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase)) // Após 3 segundos, a frase Que legal!?!? foi imprimida

// Promises tem a função then e esta é chamada quando a promise é resolvida passando o objeto desejado    
