/**
 * O objeto Array do Javascript é um objeto global usado na construção de arrays, 
 * objetos de alto nível semelhantes a listas
 *  
 * @property length
 * @property constructor
 * @property prototype
 *  
 * @method Array.prototype.forEach()
 * @method Array.prototype.push()
 * @method Array.prototype.pop()
 * @method Array.prototype.shift()
 * @method Array.prototype.unshift()
 * @method Array.prototype.indexOf()
 * @method Array.prototype.splice()
 * @method Array.prototype.slice()
*/

// Criação de um array
var frutas = ['Maçã', 'Banana']
console.log(frutas.length) //2

// Acessar um item do Array
var primeiro = frutas[0] // Maçã
var ultimo = frutas[frutas.length - 1] // Banana

// Iterar um Array
frutas.forEach(function (item, indice, array) {
    console.log(item, indice) // Maçã 0 / Banana 1
})

// Adicionar um item ao final do Array
var adicionar = frutas.push('Laranja')
console.log(frutas) // ['Maçã', 'Banana', 'Laranja']

//Remover um item do final do Array
var ultimo = frutas.pop()
console.log(frutas) // ['Maçã', 'Banana']

// Remover do início do Array
var primeiro = frutas.shift()
console.log(frutas) // ['Banana']

// Adicionar ao início do Array
var adicionar = frutas.unshift('Morango')
console.log(frutas) // ['Morango', 'Banana']

// Procurar o índice de um item na Array
frutas.push('Manga') // ['Morango', 'Banana', 'Manga']

var pos = frutas.indexOf('Banana') // 1

// Remover um item pela posição do índice
var removedItem = frutas.splice(pos, 1)
console.log(frutas) // ['Morango', 'Manga']

// Copiar um Array
var copiar = frutas.slice()
console.log(frutas) // ['Morango', 'Manga']

/**
 * Mais informações à respeito de Arrays podem ser encontradas em
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array 
*/