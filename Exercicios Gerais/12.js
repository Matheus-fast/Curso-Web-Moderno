/**
 * Escreva uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
 * nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
 * propriedade especificada no segundo parâmetro. 
 * Exemplos:
 * removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
 * removerPropriedade({
 *  id: 20,
 *  nome: "caneta",
 *  descricao: "Não preenchido"
 * }, "descricao") // retornará {id: 20, nome: "caneta"}
*/
function removerPropriedade(obj, prop) {
    const copia = Object.assign({}, obj)
    delete copia[prop]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a")) // { b: 2 }
console.log(removerPropriedade({
    id: 20,
    nome: "Caneta",
    descricao: "Não preenchido"
}, "descricao")) // { id: 20, nome: 'Caneta' }