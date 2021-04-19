/**
 * O método flatMap() não existe nativamente na api do JS.
 * 
 * Sua função é, primeiramente, mapear cada elemento e, em seguida, nivelar o 
 * resultado em um array, com o método concat.
 * 
 * A ideia deste exemplo é extrair todas as notas de todos os alunos, independemente
 * das turmas, onde, ao final, terá o array resultante.  
*/

const Escola = [{ // Escola é um array formado por objetos que representam uma turma e, dentro de turma, há uma lista de alunos (array)
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana', 
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) 
// Utilizando map para converter objetos do tipo aluno para, apenas, a nota do aluno, 
// ao final, haverá um array com as notas de todos os alunos

const primeirasNotas = Escola.map(getNotasDaTurma) // Extraindo apenas a nota da turma

console.log(primeirasNotas) // [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ] / Um array externo contendo 2 elementos, que também são arrays

/**
 * Utilizando flatMap...
 * 
 * No que seria útil este método? Gerar apenas um array com todas as notas 
*/
Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback)) 
    // A callback passada transformará os dados como se fosse um map, porém, ao resultado do mapeamento (this.map)
    // o apply será executado em cima da função concat
}

const segundasNotas = Escola.flatMap(getNotasDaTurma)
console.log(segundasNotas) // [ 8.1, 9.3, 8.9, 7.3 ]