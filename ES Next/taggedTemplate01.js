/**
 * Tagged Template nada mais é do que o processamento de template strings 
 * a partir de uma função, onde essa função recebera um parâm, que representará
 * as PARTES, e outro que representará um conjunto de VALORES, sendo um array
 * 
 * As partes são referentes àquilo que não foi interpolado
 * Os valores serão aquilo que foi interpolado dentro da string (aluno, situacao)
 * 
 * 
 * Não é muito comum de se usar. 
*/

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'

console.log(tag `${aluno} está ${situacao}`) // [ '', ' está ', '' ] [ 'Gui', 'Aprovado' ] Outra string

