/**
 * Utilizando o mesmo exemplo da aula VarEmLoop1.js 
*/

for (let i = 0; i < 10; i++) {
    console.log(i) // 1, 2, 3, 4, 5, 6, 7, 8, 9
}

console.log('O valor é igual a ' + i) // 'i is not defined'

// Nesse contexto, a variável i só estará disponível dentro do bloco for,
// já que let possui o escopo de bloco, diferentemente de var