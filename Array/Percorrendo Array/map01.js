/**
 * Associado ao map, dentro dele há um laço que será executado e o map
 * serve para transformar o array, o mapeando para um OUTRO array do mesmo
 * tamanho porém com os dados alterados.
 * 
 * Considerações:
 * 1. O array final deverá ter o mesmo tamanho que o array inicial 
 * 2. O método passado para um map requer um retorno para que o elemento possa ser transformado
*/

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function (e) { // Mapear o elemento 'e' ao elemento que será gerado no final
    return e * 2
})

console.log(nums, resultado) // [ 1, 2, 3, 4, 5 ] [ 2, 4, 6, 8, 10 ]

// Funções que serão passadas como callback para o map
const soma10 = e => e + 10 // Utilizando o return implícito presente em funções arrow
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums
    .map(soma10) // Somando por 10
    .map(triplo) // Triplicando o resultado pro 30
    .map(paraDinheiro) // Transformando para Real
    
/**
 * Pelo resultado do primeiro mapeamento ser um array, é possível chamar o map novamente
*/

console.log(resultado) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]