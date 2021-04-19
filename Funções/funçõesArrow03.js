/**
 * Exemplos sobre o comportamento do this dentro de arrow functions e
 * comparando com o comportamento de funções normais
*/

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // True / No contexto de funções normais, o objeto global é estritamente igual ao this

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // False, pois, a partir de agora, this estará apontando para obj
comparaComThis(obj) // True

// Testando com funções arrow

let comparaComThisArrow = param => console.log(this === param) 
/**
 * Será que o this continuará apontando para o bojeto global como uma função normal apontaria?
 * R: Não, pois, essa função foi definida dentro de um módulo do Node (cada arquivo representa um módulo),
 * ou seja, se cada arquivo representa um módulo e a função foi escrita diretamente dentro desse arquivo, 
 * o contexto dessa função passa a ser o módulo, tornando-o o dono da função. 
*/
comparaComThisArrow(global) // False
comparaComThisArrow(this) // True
comparaComThisArrow(module.exports) // True


/**
 * Observações finais:
 * 1. O this, dentro de uma função tradicional em JS, varia conforme a sua chamada, aponta para o objeto global
 * tanto no browser quanto no node
 * 2. Já em funções arrow, o this aponta para o módulo corrente, o arquivo no qual a função foi definida (module.exports)
 */