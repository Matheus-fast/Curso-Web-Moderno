/**
 * Dentro de um módulo do Node, this aponta para module.exports 
*/

console.log(module.exports === this) // true
console.log(module.exports === exports) // true

this.a = 1
exports.b = 2
module.exports.c = 3

// this e exports são duas referências para um mesmo objeto que module.exports aponta

exports = null
console.log(module.exports) // { a: 1, b: 2, c: 3 }

/**
 * Mesmo atribuindo null para a variável exports, module.exports continua apontando para tudo
 * aquilo que foi definido antes, pois, exports aponta para um mesmo objeto, ou seja, tanto faz
 * adicionar atributos a partir de this, exports ou module.exports.
 * 
 * No final das contas, quem será exportado a partir de um módulo será module.exports 
*/

exports = { // Este objeto não será exportado, pois, a sua refêrencia foi alterada para outro objeto 
    nome: 'Teste'
}

console.log(module.exports) // { a: 1, b: 2, c: 3 } / O module.exports continuará sendo o mesmo objeto, mesmo tendo sido alterado o valor de exports 2x

// Maneira correta de exportar um objeto
module.exports = {
    publico: true
}
 
console.log(module.exports) // { publico: true }