/**
 * Utilizando uma função do Object.create() e for in
 * para percorrer atributos de um objeto e ver como a 
 * herança pode impactar esta execução
*/
const pai = { nome: 'Pedro', corCabelo: 'Preto' }

// Um objeto está sendo criado tendo como protótipo o objeto pai

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // Preto

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(filha2.nome) // Bia
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // Bia tem cabelo preto

console.log(Object.keys(filha1)) // [ 'nome' ]
console.log(Object.keys(filha2)) // [ 'nome' ] 

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? // Verificando se um determinado atributado, acessado pelo for in, pertence ao próprio objeto ou se veio por herança
        console.log(key) : console.log(`Por herança: ${key}`) // nome / Por herança: corCabelo
}