/**
 * Getters (get) e Setters (set) são funções e, dentro delas, os valores
 * são acessados. Poder realizar validações e processamentos antes de devolver
 * o valor da variável é a vantagem de acessar um valor em cima de uma função.
 * 
 * OBS: 
 * 1. JS não aceita a sobrecarga de métodos, ou seja, possuir vários métodos
 * com o mesmo nome porém parâmetros diferentes, EXCETO ao usar GET e SET.  
 * 
 * 2. Utilizar _ quer dizer que a variável é convencionada à ser acessada
 * somente dentro do objeto sequência.
*/

const sequencia = {
    _valor: 1,
    get valor() {
        return this._valor++ // Pegar o valor, retorná-lo e incrementá-lo, ou seja, sempre gerando um novo valor
    },
    set valor(valor) {
        if (valor > this.valor) { // Validação: Só entrará na condição caso o valor passado pelo usuário seja maior que o valor da sequência
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // 1, 2

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)  // 1000, 1001

// Pelo fato de tentar trazer a sequencia para um valor menor, foi ignorado a atribuicao do valor 900 (set) 
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) // 1002, 1003