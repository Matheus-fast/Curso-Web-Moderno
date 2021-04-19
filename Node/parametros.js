/**
 * Passando parâmetros para um módulo.
 * 
 * Se um módulo retorna uma função, é possível invocar essa função passando
 * os parâmetros, o que tiver dentro será executado
 */

module.exports = function (...nomes) {
    return nomes.map(nome => `Boa semana, ${nome}!`)
}