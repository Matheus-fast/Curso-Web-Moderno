/**
 * Entendendo como funciona herança dentro de funções 
 * 
 * Observações: 
 * 1. Todos os objetos criados a partir de uma mesma função
 * construtora, apontam para o mesmo protótipo (__proto__)
 * 
 * 2. Ao criar um objeto a partir de uma função construtora usando 'new',
 * automaticamente, o protótipo desse objeto aponta para <funcao-criada>.prototype
 * 
 * 3. Toda função tem o atributo .prototype e, dentro dela, também há a referência para __pronto__, e, 
 * quanto aos objetos, __proto__, que é como um objeto referencia seu protótipo.
*/

function MeuObjeto() {}
console.log(MeuObjeto.prototype) // {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // True / Observação 1
console.log(MeuObjeto.prototype === obj1.__proto__) // True / Observação 2


// Qualquer objeto que for criado a partir da funcao construtura MeuObjeto, terá acesso aos atributos 
// nome e falar a partir do protótipo, ou quaisquer outros atributos 
MeuObjeto.prototype.nome = 'Anônimo' 
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}!`)
}

obj1.falar() // Bom dia, meu nome é Anônimo!

obj2.nome = 'Rafael'
obj2.falar() // Bom dia, meu nome é Rafael!

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Mudando a referência do protótipo desse objeto, de Object.protype para MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar() // Bom dia, meu nome é Obj3!

// Resumo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true / O resultado de new MeuObjeto é um objeto (Obs 2)
console.log(MeuObjeto.__proto__ === Function.prototype) // true / Observação 3
console.log(Function.prototype.__proto__ === Object.prototype) // true / O protótipo do protótipo de uma função aponta para Object.prototype
console.log(Object.prototype.__proto__) // null / Após Object.prototype, não há mais nada na cadeia de protótipos

/**
 * Exibição: https://prnt.sc/1150tze 
*/
