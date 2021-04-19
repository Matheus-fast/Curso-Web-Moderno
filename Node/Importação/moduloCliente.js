/**
 * Para importar algo utilizando CommonsJS, sendo o sistema de módulos do Node, 
 * será utilizado a palavra require 
*/

const ModuloA = require('./moduloA') // Associando o que foi exportado em MóduloA.js 
const ModuloB = require('./moduloB') // Associando o que foi exportado em MóduloB.js 

console.log(ModuloA) // { ola: 'Fala, pessoal!', bemVindo: 'Bem vindo ao Node!', ateLogo: 'Até o próximo exemplo!' }

console.log(ModuloA.ola) // Fala, pessoal!
console.log(ModuloA.bemVindo) // Bem vindo ao Node!
console.log(ModuloA.ateLogo) // Até o próximo exemplo!

console.log(ModuloB) // { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }

console.log(ModuloB.bomDia) // Bom dia
console.log(ModuloB.boaNoite()) // Boa noite