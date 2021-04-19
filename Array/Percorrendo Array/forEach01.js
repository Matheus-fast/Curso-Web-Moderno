/**
 * Oservação:
 * A função callback passada para um forEach recebe 3 parâmetros:
 * 1. Nome,
 * 2. Índice,
 * 3. Array, o próprio array é passado como terceiro parâmetro para a função callback  
 * 4. X, será dado como undefined
*/
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) { // Uma callback será passada e esta será chamada para cada iteração que for feita nesse array
    console.log(`${indice + 1}) ${nome}`) // 1) Agatha 2) Aldo 3) Daniel 4) Raquel
})

aprovados.forEach(nome => console.log(nome)) // Agatha Aldo Daniel Raquel

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) // // Agatha Aldo Daniel Raquel

aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    /**
     * 1) 
     * [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
     * 2) Aldo
     * [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
     * 3) Daniel
     * [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
     * 4) Raquel
     * [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
     */
})