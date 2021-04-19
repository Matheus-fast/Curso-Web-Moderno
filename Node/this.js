/**
 * Entendendo o comportamento do this dentro de um módulo em Node 
*/
console.log(this === global) // false / this aponta para module.exports
console.log(this === module) // false / this é um objeto que é referência de module.exports
console.log(this === module.exports) // true
console.log(this === exports) // true / exports aponta para o mesmo objeto que this

// Prestar atenção e ter cuidado ao acessar o this dentro de uma função que está dentro do módulo
function logThis() {
    console.log(this === exports) // false / Dentro de uma função, this não aponta para exports mas fora, aponta
    console.log(this === module.exports) // false
    console.log(this === global) // true / Dentro de uma função, this aponta pra global

    this.perigo = '...' // Ao fazer isso, coloca-se this dentro do escopo global
}

logThis()