/**
 * Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
 * funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
 * X", em que X é o quanto o funcionário ganhou no mês.
 * Exemplos:
 * calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
 */

function calcularSalario(horasTrabalhadas, ganhoPorHora) {
    let salario = ganhoPorHora * horasTrabalhadas

    return `Salário igual a R$${salario.toFixed(2)}`
}
console.log(calcularSalario(150, 40.5)) // Salário igual a R$6075.00
console.log(calcularSalario(275, 80.3)) // Salário igual a R$22082.50
