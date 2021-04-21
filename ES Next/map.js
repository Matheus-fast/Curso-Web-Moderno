/**
 * Dentro de Javascript existe uma estrutura dinâmica de chave/valor, sendo o objeto, 
 * porém, nas novas versões do ES a estrutura Map foi adicionada. 
 * 
 * A diferença do map para o objeto é que, no map, as chaves podem ser utilizadas como 
 * funções, números, objetos, etc., tendo uma maior flexibilidade.
*/
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react')) // { framework: false } 

// Uma vez que o valor do map é obtido a partir da função get, é possível utilizar a notação literal
console.log(tecnologias.get('react').framework) // false

// Criando um Map já atribuindo elementos
const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(`${chave}. ${valor}`) // function () { }. Função / [object Object]. Objeto / 123. Número
})

// Verificando se um elemento está ou não contido dentro do Map
console.log(chavesVariadas.has(123)) // true

// Verificando quantos elementos estão presentes dentro do Map
console.log(chavesVariadas.size) // 3

// O map continua sendo uma estrutura chave/valor, que não aceita repetições na chave
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // O último valor que será constado
console.log(chavesVariadas) // Map(3) { [Function (anonymous)] => 'Função', {} => 'Objeto', 123 => 'b' } 