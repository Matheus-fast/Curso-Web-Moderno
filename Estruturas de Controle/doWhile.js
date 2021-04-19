/**
 * Cria um laço que executa um declaração até que o teste da condição seja falsa.
 * A avalição é realizada após o bloco de código ser executado, sendo assim, toda 
 * declaração será executada pelo menos uma vez
 * 
 * @syntax do { statements } while (condition)
 * 
 * @statements serão executados, ao menos, uma vez e re-executadas cada vez 
 * que a condição (condition) for avaliada como verdadeira
 * 
 * Se @condition é avaliada como verdadeira, o bloco de código é executado novamente. 
 * Quando a condição (condition) é avaliada como falsa, o controle passa para a instrução 
 * seguinte ao laço do...while. 
*/

function getRandomInteger(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

var option = -1

do {
    option = getRandomInteger(-1, 15)
    console.log(`Ooção escolhida: ${option}`) // Números aleatórios entre -1 e 15
} while (option != -1);

console.log('Finalizando execução...')

/**
 * Mesmo que a variável OPTION seja -1, ele obrigatoriamente irá executar a primeira repetição e o valor
 * da variável será alterado pelo aquele que foi gerado na função.
 *
 * Executará o código quantas vezes forem necessárias até que encontre o valor -1 e saia do laço
 *
 * Só cairá no caso do while após ter executado ao menos uma vez a primeira repetição
*/