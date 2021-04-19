const contadorA = require('./instanciaUnica') // contadores A e B compartilharão do mesmo objeto retornado
const contadorB = require('./instanciaUnica')

/**
 * Visto que contadorC irá retornar uma nova instância, uma função factory, para se ter acesso ao objeto presente
 * no módulo InstanciaNova, é preciso chamar o objeto após invocar a função retornada (() no final) 
*/
const contadorC = require('./instanciaNova')() 
const contadorD = require('./instanciaNova')() 

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // 3 3 / O valor de B foi alterado, uma vez que o Node, por padrão, faz cache dos objetos 
// retornados a partir de um require, ou seja, os incrementos feitos em contadorA também foram aplicados em contadorB

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // 3 1 / O valor de D não foi alterado, pois, contadorC que teve seu valor incrementado 
