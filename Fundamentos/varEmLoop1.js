/**
 * Utilizando o laço for, o qual consiste em três expressões opcionais.
 * @syntax for ([initial]; [condition]; [final]) { declaration }
 * 
 * Explicação mais completa disponível na pasta 
 * https://github.com/Torr7s/Aulas-Udemy/blob/main/Estruturas%20de%20Controle/For.js 
*/

for (var i = 0; i < 10; i++) {
    console.log(i) // 1, 2, 3, 4, 5, 6, 7, 8, 9

    // Quando i tiver seu valor igual a 10 e 10 for menor do que ele mesmo (i < 10), 
    // o resultado será falso e o código será executado após o laço
}

console.log('O valor é igual a ' + i) // 10

// Nesse contexto, o valor de i é o valor que o fez sair do laço, ou seja, 10
// i terá acesso ao valor, pois, foi declarado com var, e var não possui escopo de bloco 


