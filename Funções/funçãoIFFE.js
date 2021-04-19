/**
 * IIFE - Immediatly Invoked Function Expression
 * 
 * Função Auto-Invocada, onde se tem uma função anônima e, na sua declaração, já
 * se é chamada a invocação dessa função.
 * Ao criar uma função auto-invocada, o trecho de código dentro dessa função será
 * executado imediatamente e tudo que for criado dentro da função será escopo local
 * 
 * Tem como função, principalmente ao utilizar o browser, fugir do escopo global/manipular
 * trechos de forma global  
*/

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()

