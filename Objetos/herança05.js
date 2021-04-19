/**
 * Observações:
 * 1. Strings ou Arrays são acessados dentro de um método .prototype utilizando this
 * 2. Não sobrescever comportamentos já existentes em protótipos
*/

console.log(typeof String, Array, Object) // Function, ou seja, possuem o atributo .prototype

String.prototype.reverse = function() { // Atribuindo .reverse ao prototype de Strings, já que esse método é conivente à Arrays
    return this.split('').reverse().join('') // (Observação 1)

    // Gera um array, reverte os valores deste e, depois, uma nova string é gerada e o 
    // resultado dessa função é uma nova string com os valores invertidos
}

console.log('Escola Cod3r'.reverse()) // r3doC alocsE / Literal do tipo String, por isso foi possível utilizar .reverse

Array.prototype.first = function() { // Atribuindo .first ao prototype de Arrays, já que esse método é conivente à Strings
    return this[0] // (Observação 1)
}

console.log([1, 2, 3, 4, 5].first()) // 1
console.log(['a', 'b', 'c', 'd', 'e'].first()) // a