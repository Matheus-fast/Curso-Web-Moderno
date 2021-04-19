/**
 * Funções importantes à serem usadas para tratar objetos:
 * # Target faz referência ao objeto a ser inspecionado
 * 
 * @method Object.keys(target)
 * Irá pegar todas as chaves de um objeto que puderem ser listadas
 * 
 * @method Object.values(target)
 * Irá pegar todos os valores do objeto
 * 
 * @method Object.entries(target)
 * Irá retornar um array com as chaves/valores do objeto
 * É possível percorrer o array retornado utilizando forEach ou map
 * 
 * @method Object.defineProperty(target, 'property-name', { properties } )
 * Definir uma propriedade do objeto e/ou características de uma propriedade do objeto
 * 
 * @method Object.assign(target, value, value)
 * Irá atribuir o valor de determinados atributos ao objeto de destino
 * 
 * @method Object.freeze(target)
 * Não irá permitir que o objeto seja sobrescrito
*/

const Pessoa = {
    nome: 'Mônica',
    idade: 20,
    peso: 65
}

console.log(Object.keys(Pessoa)) // [ 'nome', 'idade', 'peso' ]
console.log(Object.values(Pessoa)) // [ 'Mônica', 20, 65 ]
console.log(Object.entries(Pessoa)) // [ [ 'nome', 'Mônica' ], [ 'idade', 20 ], [ 'peso', 65 ] ]

// Percorrendo o array retornado com forEach
Object.entries(Pessoa).forEach(p => {
    console.log(`${p[0]}: ${p[1]}`) // nome: 'Mônica' / idade: 20 / peso: 65
})

// Utilizando o operador destructuring
Object.entries(Pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`) // nome: 'Mônica' / idade: 20 / peso: 65
})

// Object.defineProperty
Object.defineProperty(Pessoa, 'dataNascimento', {
    enumerable: true, // Passível a ser listada 
    writable: false, // Passível a receber atribuições
    value: '01/01/1990'
})

Pessoa.dataNascimento = '01/01/2019' 
console.log(Pessoa.dataNascimento) // 01/01/1990

// Object.assign (ES 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const Objeto = Object.assign(dest, o1, o2) // { a: 4, b: 2, c: 3 } / O valor que ficará sobrescrito é o último valor à ser concatenado
console.log(Objeto)

// Object.freeze()
Object.freeze(Pessoa)
Pessoa.idade = 19
console.log(Pessoa.idade) // 20