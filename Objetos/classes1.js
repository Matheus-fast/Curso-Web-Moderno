class Lancamento {
    constructor(nome = 'Genérico', valor = 0) { // Utiliza-se constructor(params) por ser a forma padrão; a classe será instanciada pelo operador new e será transformada em função construtora 
        this.nome = nome // Adicionando ao objeto que será criado o atributo nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) { // Receberá um ou mais lancamentos que queiram ser passados e concatena todos os parâmetros em um array
        lancamentos.forEach(l => this.lancamentos.push(l)) // Percorrendo cada elemento do array e dando push no array que pertence ao objeto
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2020)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario()) // 44780