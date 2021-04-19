/**
 * É um princípio da OO que permite a recepção de atributos e comportamentos
 * de uma classe Pai e, também, permite a reutilização de códigos. 
*/

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // Undefined
console.log(ferrari.__proto__) // {}
console.log(ferrari.__proto__ === Object.prototype) // True
console.log(volvo.__proto__ === Object.prototype) // True
console.log(Object.prototype.__proto__) // Null

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto) // function, function
console.log(Object.prototype, meuObjeto.prototype) // {}, meuObjeto {}

/**
 * Um objeto em javascript tem uma referência para o seu protótipo e essa é a forma que Javascript
 * define Herança. A partir da referêcia de um protótipo, há uma referência para um outro objeto e
 * este possui atributos e comportamentos que podem ser acessados a partir de um objeto Filho, 
 * caso estes não existam no Filho, ele irá procurar no objeto Pai e assim por diante, percorrendo 
 * a cadeia de protótipos até encontrar determinados atributos.
 * Assim sendo, permitindo a reutilização de atributos e funções em todos os objetos.
 * 
 * Utilizar Object.__proto__ para acessar o protótipo do objeto
 */