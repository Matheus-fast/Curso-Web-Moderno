/**
 * Criará um loop que consiste em três expressões opcionais, dentro de parênteses 
 * e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência 
 * de declarações executadas em sequência. 
 * 
 * @syntax for ([initial]; [condition]; [final]) { declaration }
 * 
 * @initial 
 * Uma expressão ou declarações variáveis, geralmente utilizada para iniciar o laço. Pode
 * declarar novas variáveis com a palavra chave var. 
 * Não é necessário inicializar variáveis
 * 
 * @condition 
 * Condição usada para o laço continuar repetindo a execução do bloco
 * 
 * @final 
 * Uma expressão que será validada no final de cada iteração do loop, ocorrendo antes
 * da próxima avaliação da condição. Geralmente usado para incrementar a variável do contador
 * 
 * @declaration 
 * Uma declaração que é executada enquanto a condição for verdadeira
 * Para não executar declarações dentro do loop, use uma instrução vazia (;)
*/

var i = 0
for (; i < 9; i++) {
    console.log(i) // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8
}

// A condição também se faz opcional
for (var i = 0;; i++) {
    console.log(i) // Output: 0, 1, 2, 3, 4
    if (i > 3) {
        break
    }
}

// Mostrando a utilização de FOR comparando com a estrutura WHILE
let counter = 1
while (counter <= 10) {
    console.log(`Contador: ${counter}`)
    counter++
}

for (let i = 1; i <= 10; i++) {
    console.log(`I = ${i}`)
}