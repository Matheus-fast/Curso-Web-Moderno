/**
 * Javascript Object Notation (JSON) - formato de dados
 * O mais usado para interoperabilidade entre sistemas de empresas, ou seja,
 * possuir um formato textual que nao carregue consigo nada específico de um
 * sistema/tecnologia
 * 
 * OBS: 
 * 1. Em JSON, o nome do atributo deve ser delimitado por aspas duplas ("")
*/

const Objeto = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}

/**
 * O resultado gerado excluiu a função soma(), pois, JSON é um formato de dados,
 * não é algo executável. 
*/
console.log(JSON.stringify(Objeto)) // Convertendo objeto para JSON / {"a":1, "b":2, "c":3}

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Convertendo JSON para objeto / { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // { a: 1, b: 'string', c: true, d: {}, e: [] }