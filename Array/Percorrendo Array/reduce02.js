const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'André', nota: 9.8, bolsista: false },
    { nome: 'Roberto', nota: 8.4, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas?
const bolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos
    .map(a => a.bolsista)
    .reduce(bolsistas)
) // false

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos
    .map(a => a.bolsista) // [false, true, false, true ]
    .reduce(algumBolsista)
) // true