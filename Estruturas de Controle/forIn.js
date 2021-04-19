/**
 * O laço for..in interage sobre propriedades enumeradas de um objeto e
 * somente aquelas enumeráveis herdadas de construtores de objetos prototype, 
 * podendo ser executado para cada propriedade distinta do objeto.
 * 
 * @syntax for (variavel in objeto) { ... }
 * 
 * @variavel Uma propriedade diferente do objeto é atribuida em cada iteração
 * @objeto Objeto com as propriedades enumeradas
 * 
 * 
 * Não é recomendado adicionar, remover ou alterar propriedades novas ao objeto
 * durante a executação do laço (durante o loop)
*/

var obj = { a: 1, b: 2, c: 3 }

for (var property in obj) {
    console.log(`obj. ${property} = ${obj[property]}`)
}

// Output:
// obj. a = 1
// obj. b = 2
// obj. c = 3