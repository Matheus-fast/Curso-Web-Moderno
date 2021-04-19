/**
 * Retorna um novo array contendo todos os arrays ou valores passados como parâmetro
 * Lembre-se: O array original não será alterado, somente será criado um novo array
 * 
 * @syntax arr.concat(valor1, valor2, ... valorN)
 * 
 * @param valorN
 * Arrays ou valores para concatenar ao array retornado
*/

const filhas = ['Ana', 'Bia', 'Carol']
const filhos = ['Gabriel', 'André', 'Roberto']
const idade = [19, 20, 21, 22, 23, 24]
const todosOsFilhos = filhas.concat(filhos, idade) // Passando os array como parâmetro e o array resultante é a concatenação de ambos

console.log(todosOsFilhos) // ['Ana', 'Bia', 'Carol', 'Gabriel', 'André', 'Roberto', 19, 20, 21, 22, 23, 24]