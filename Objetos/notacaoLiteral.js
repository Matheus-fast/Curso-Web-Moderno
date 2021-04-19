/**
 * Melhorias a partir do ES2015 com relação a notação literal
 * de objetos.
 * 
 * 1. Simplicidade: Automaticamente o nome da constante será o nome do atributo 
 * criado dentro do objeto, caso sejam exatamente iguais. Caso queira alterar o nome
 * do atributo, ai se faz necessário o uso do primeiro exemplo ( {a: a } )
 * 
 * 2. Criação dinâmica de um atributo em um objeto, por exemplo, a partir de uma string
 * 
 * 3. Simplificação ao criar funções dentro de um objeto literal 
*/

const a = 1
const b = 2
const c = 3

// 1
const Objeto1 = { a: a, b: b, c: c} // Antes do ES2015
const Objeto2 = { a, b, c } // Simplicidade

console.log(Objeto1) // { a: 1, b: 2, c: 3 }
console.log(Objeto2) // { a: 1, b: 2, c: 3 }

// 2
const nomeAttr = 'Nota'
const valorAttr = 7.90

const Objeto3 = {}
obj3[nomeAttr] = valorAttr
console.log(Objeto3) // { Nota: 7.9 }

const Objeto4 = {[nomeAttr]: valorAttr} // ES2015
console.log(Objeto4) // { Nota: 7.9 }

// 3
const Objeto5 = {
    funcao1: function () { // Antes do ES2015
        // ...
    },
    funcao2 () { // ES 2015
        // ...
    }
}