/**
 * Closure é o escopo criado quando uma função é declarada e esse
 * escopo permite a função acessar e manipular variáveis externas à
 * ela.
*/

function init() {
    let name = 'Local' // Variável local criada a partir da função init
    function displayname() { // Função aninhada (closure) e está disponível somente dentro da função init
        console.log(name)
    }
    displayname() // Diferente de init(), displayName() não possui variáveis locais próprias, reusando a variável name declarada na função pai
}
init() // 'Local'

// Outro exemplo, com o mesmo efeito da função anterior, porém...
function makeFunc() {
    let name = 'Local'
    function displayName() {
        console.log(name)
    }
    return displayName // A função interna do displayName() foi retornada da função externa antes de ser executada
}

var myFunc = makeFunc()
myFunc() // 'Local'