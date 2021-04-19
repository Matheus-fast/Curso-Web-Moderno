/**
 * Recurso introduzido no ES2015
 * 
 * Utilizando o operador destructuring para extrair dados de um objeto
 * 
 * OBS: Ao passar um valor não existente no objeto para ser extraído,
 * o valor retornado será undefined
 * 
 * OBS2: Cuidado ao tentar desestruturar um dado aninhado, tenha certeza
 * que o caminho até esse dado esteja setado
*/

const Pessoa = {
    nome: 'Ana',
    idade: 6,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 78
    }
} 

// Inicializando com a desestruturação
const { nome, idade } = Pessoa  
console.log(nome, idade) // Ana, 6

// Caso queira alterar o nome da variável
const { nome: n, idade: i } = Pessoa // n e i foram criadas em formas de variáveis
console.log(n, i) // Ana, 6

// Caso tente acessar um atributo do objeto que nao exista
const { sobrenome, bemHumorada = true } = Pessoa 
// Atribuindo um valor padrão à bemHumorada, ou seja, caso não retorne nada de bemHumorada, assuma o valor true

console.log(sobrenome, bemHumorada) // undefined, true

// Tentando acessar atributos que estejam dentro de um outro atributo
const { endereco: { logradouro, numero } } = Pessoa
console.log(logradouro, numero) // Rua ABC, 78