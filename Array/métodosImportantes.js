const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // Não será possível atribuir valores à essa array por ser uma constante

pilotos.pop() // Remove o último elemento do array
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen') // Adiciona um elemento ao final do array 
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição do array
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// Adicionar com splice
pilotos.splice(2, 0, 'Bottas', 'Massa') // No índice 2 serão adicionados 'Bottas' e 'Massa', sem remover ninguém (0)
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// Remover com splice
pilotos.splice(3, 1) // No índice 3, remova um único elemento
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

// Utilizando slice, que retorna um novo array
const algunsPilotos = pilotos.slice(2) // Pegará um novo array a partir do índice 2
console.log(algunsPilotos) // [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(1, 4) // Pegará um novo array, a partir do índice 1 até o 4, porém, o 4º elemento não entrará
console.log(algunsPilotos1) // [ 'Alonso', 'Bottas', 'Raikkonen' ]