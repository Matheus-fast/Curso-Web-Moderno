/**
 * Mostrando como o Node faz cache de módulos que são importados a partir 
 * da função require. Ao importar um módulo, por padrão, esse módulo é cacheado.
 * 
 * Utilizando o recurso de função factory para que, ao importar o módulo, já seja
 * gerado um novo objeto. 
*/

module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}