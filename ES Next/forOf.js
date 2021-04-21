/**
 * O laço for of itera sobre valores (Array, Map, Set, arguments, etc),
 * chamando uma função personalizada com instruções a serem executadas para
 * o valor de cada objeto distinto. 
 * 
 * @syntax for (variavel of iteravel) { ... }
 * 
 * @variavel A cada iteração, um valor de uma propriedade diferente é atribuído à variavel
 * @iteravel Objetos cujos atributos serão iterados
 * 
 * É possível utilizar const ao invés de let para a declaração da variável, caso não
 * haja modificações dentro do bloco
*/

// Mostrando a diferença de for in e for of
const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) {
    console.log(i) // 0 1 2
}

for (let assunto of assuntosEcma) {
    console.log(assunto) // Map Set Promise
}

// Percorrendo um Map de formas diferentes
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto) // [ 'Map', { abordado: true } ] [ 'Set', { abordado: true } ] [ 'Promise', { abordado: false } ]
}

for (let chave of assuntosMap.keys()) { // Map Set Promise
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor) // { abordado: true } { abordado: true } { abordado: false }
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor) // Map { abordado: true } Set { abordado: true } Promise { abordado: false }
}

const S = new Set(['a', 'b', 'c'])
for (let letra of S) {
    console.log(letra) // a b c
}