/**
 * Operador ...rest, utilizado para juntar todos os parâmetros passados 
 * para uma função e juntar em uma única estrutura
 * 
 * Operador spread, utilizado para espalhar. 
*/

// Usando rest
function length(...nums) {
    console.log(nums.length)
}

length(1, 2, 3, 4, 5) // 5

function multiplicar(multiplicador, ...args) {
    return args.map(function (elemento) {
        return multiplicador * elemento // Multiplicando do segundo parâmetro em diante pelo primeiro
    })
}

console.log(multiplicar(1, 2, 3)) // [ 2, 3 ] 
console.log(multiplicar(2, 3, 4)) // [6, 8]

// Usando spread com objetos 
const funcionario = {
    nome: 'Maria', 
    salario: 1234.98
}

const clone = {
    ativo: true, 
    ...funcionario
} // Pegando/espalhando todos os atributos de funcionário dentro de clone 

console.log(funcionario) // { nome: 'Maria', salario: 1234.98 }
console.log(clone) // { ativo: true, nome: 'Maria', salario: 1234.98 }

// Usando spread com arrays
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]

console.log(grupoFinal) // [ 'Maria', 'Rafaela', 'João', 'Pedro', 'Gloria' ]