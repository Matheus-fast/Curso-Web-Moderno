/**
 * Estrutura de conjunto, não indexada e que não aceita repetições. 
*/

const times = new Set()
times.add('Vasco')
times.add('São Paulo')
times.add('Flamengo').add('Fluminense').add('Palmeiras')
times.add('Vasco') // Elementos repetidos serão ignorados

console.log(times) // Set(5) { 'Vasco', 'São Paulo', 'Flamengo', 'Fluminense', 'Palmeiras' }

console.log(times.size) // 5
console.log(times.has('vasco')) // false
console.log(times.has('Vasco')) // true

times.delete('Fluminense')
console.log(times.has('Fluminense')) // false

// Criando um Set a partir de um array tradicional
const nomes = ['Raquel', 'André', 'Júlia', 'Lucas', 'Raquel']
const nomesSet = new Set(nomes)
console.log(nomesSet) // Set(4) { 'Raquel', 'André', 'Júlia', 'Lucas' }