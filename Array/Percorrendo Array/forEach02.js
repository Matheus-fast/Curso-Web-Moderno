/**
 * Exercício de simulação do forEach, associando uma função no prototype 
 * de Array chamada forEachOne, onde essa função recebe um callback e, para 
 * cada iteração do array, o callback é chamado e recebe 3 parâmetros
 */

Array.prototype.forEachOne = function (callback) {
    for (
        let i = 0;
        i < this.length;
        i++
    ) {
        callback(this[i], i, this) // Params: 1 elem.: This, acessando o índice i / 2 elem.: O próprio índice / 3 elem.: Array completo
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEachOne(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`) // 1) Agatha 2) Aldo 3) Daniel 4) Raquel
})