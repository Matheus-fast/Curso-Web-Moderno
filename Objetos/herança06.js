/**
 * Simulando o que acontece quando o operador new é usado para instanciar
 * um objeto criado a partir de uma função construtora 
*/

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123) // O protótipo do objeto criado aponta para a função construtora, Aula.prototype
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2) // Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }

// Simulando o operador new
function Novo(f, ...params) {
    const obj = {} 
    obj.__proto__ = f.prototype // O protótipo do objeto criado foi associado ao atributo prototype da função passada (f) (O mesmo acontece ao chamar o operador new de uma função construtora)
    f.apply(obj, params) // Vai executar a função f passando como objeto de contexto (this de execução da função) o objeto criado na linha 17 e passando os parâmetros recebidos no método novo (...params)
    return obj // Retornando o objeto criado / Função do operador new 
}

const aula3 = Novo(Aula, 'Bem Vindo', 123)
const aula4 = Novo(Aula, 'Até Breve', 456) 
console.log(aula3, aula4) // Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }

