/**
 * Como fazer para retornar uma nova instância, já que, por padrão, o Node
 * ja a cacheia? Utilizando uma função factory, visto que uma factory retorna
 * um novo objeto 
*/

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}