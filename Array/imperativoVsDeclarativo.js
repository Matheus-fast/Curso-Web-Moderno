/**
 * Diferença entre possuir um código Imperativo e um Declarativo
 * 
 * Imperativo:
 * Dá-se mais importância ao modo COMO tem que ser feito, explicando
 * passo a passo detalhadamente
 * 
 * Declarativo: 
 * Dá-se mais importância com O QUÊ tem que ser feito, passando apenas
 * os critérios que serão utilizados no algoritmo
 * 
 * Exemplos no código:
*/
const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0          // Atribuindo à uma variável o valor 0
for (                   // Abrindo um laço
    let i = 0;          // Criando uma variável de controle, para percorrer o laço dizendo que...  
    i < alunos.length;  // Ele começará do indice 0 e irá até o índice do tamanho do array menos 1   
    i++                 // Incrementando o laço
) {
    total1 += alunos[i].nota // Atribuindo o índice de cada aluno e a nota à variável 
}
console.log(total1 / alunos.length) // 8.55

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, valorAtual) => total + valorAtual
const total2 = alunos.map(getNota).reduce(soma) // Utilizando reduce para agregar os valores em um só

console.log(total2 / alunos.length) // 8.55

/**
 * O método DECLARATIVO torna-se mais útil por ser reutilizável, no caso, com relação
 * às funções criadas.
 * 
 * A forma de escrever o código acaba ficando mais objetiva e clara
*/