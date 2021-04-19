/**
 * Utilizando a cadeia de protótipos (prototype chain) mencionada
 * em Herança1.js.
 * 
 * Neste caso, verificará se 'filho' possui atributo1, se não tiver,
 * procurará no protótipo (__proto__) referenciado até encontrar, caso não encontre,
 * retornará undefined
*/
Object.prototype.atributo0 = '1' // Não recomendado
const avo = { atributo1: 'A' } // Aponta para Object.prototype
const pai = { __proto__: avo, atributo2: 'B' }
const filho = { __proto__: pai, atributo3: 'C' }

console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3) // 1, A, B, C

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h` // This está referenciando o objeto atual
    }
}

const ferrari = { // Ao definir que o protótipo de ferrari seja carro, o atributo velMax será sombreado pelo atributo original do objeto carro
    modelo: 'F40',
    velMax: 324 // shadowing - sombreamento, acontece quando há uma variável local, dentro de uma função, e essa variável pode sombrear variáveis de escopo mais abrangentes 
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super é utilizado para referenciar o seu protótipo
    }
}

/**
 * @param object
 * @param prototype
*/
Object.setPrototypeOf(ferrari, carro) // Definindo relação de protótipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // { modelo: 'F40', velMax: 324 }
console.log(volvo) // { modelo: 'V40', status: [Function: status] } / Consegue acessar velMax a partir da procura dos protótipos

volvo.acelerarMais(100) 
console.log(volvo.status()) // Modelo V40: 100Km/h de 200Km/h

ferrari.acelerarMais(200)
console.log(ferrari.status()) // 200Km/h de 324Km/h