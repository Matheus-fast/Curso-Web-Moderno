/**
 * Aquilo que uma vez foi disponibilizado como global, ficará disponível 
 * em todo o sistema 
*/

require('./Global')
console.log(MinhaApp.saudacao()) // Estou em todos os lugares
console.log(global.MinhaApp.saudacao()) // Estou em todos os lugares

MinhaApp.nome = 'Eita!' // Uma alternativa para evitar a modificação de atributos de objetos globais, é utilizar Object.freeze
console.log(MinhaApp.nome) // Eita! 