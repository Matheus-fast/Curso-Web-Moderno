/**
 * This pode variar! 
 * 
 * No exemplo abaixo, sabemos que this não apontará para objeto Pessoa criado, pois,
 * o this pode variar ao trabalharmos com funções tradicionais de acordo com quem está
 * invocando a função. O invocador da função abaixo é o setInterval, que possui um temporizador
 * que ficará disparando essa função, então, o this estará apontando para quem estiver executando.
*/

function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade) // NaN NaN NaN NaN NaN NaN
    }, 1000)
}

new Pessoa 


/**
 * Como resolver?
 * R: Amarrando o this do objeto para a chamada da função 
 * 
 * OBS: 
 * Ao executar a função .bind(this) dentro da função Pessoa, this estará apontando
 * para o próprio objeto Pessoa
*/

function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade) // 1, 2, 3, 4, 5, 6, ..., 1000
    }.bind(this), 1000)
}

new Pessoa 