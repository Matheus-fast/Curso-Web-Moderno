/**
 * Para passar parâmetros de um módulo para outro, em um módulo exporta-se que você
 * deseja receber os parâmetros de uma função e, em outro módulo, passa-se esses parâmetros.  
*/
const saudacoes = require('./Parametros')('Ana', 'Bia', 'Lucas', 'João')
console.log(saudacoes) // [ 'Boa semana, Ana!', 'Boa semana, Bia!', 'Boa semana, Lucas!', 'Boa semana, João!' ]