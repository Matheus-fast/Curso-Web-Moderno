/**
 * Objetos são uma coleção dinâmica de pares chave/valor 
 * 
 * São inicializados ou utilizando new Object(), não sendo obrigatório o uso dos parênteses,
 * ou com Object.create() ou, pela notação literal, ({ })

 * PROPRIEDADES DE UM OBJETO:
 * @property for in
 * Irá percorrer todas as propriedades enumeráveis de um objeto e sua cadeia de protótipos
 * 
 * @property Object.keys()
 * Retornará um array com todos os nomes ("chaves") de propriedades próprias de um objeto
 * 
 * @property Object.getOwnPropertyNames()
 * Retornará um array contendo todos os nomes de propriedades próprias (enumeráveis ou não) de um objeto 
 * 
 * Todos os objetos herdam de pelo menos um outro objeto, o objeto "Pai", que é conhecido
 * como protótipo, e as propriedades herdadas podem ser encontradas no objeto prototype do
 * construtor. À isso é dado o nome de HERANÇA.
*/

function listProperties(o) {
    var objectToBeInspected
    var result

    for (objectToBeInspected = 0; objectToBeInspected !== null; objectToBeInspected = Object.getPrototypeOf(objectToBeInspected)) {
        result = result.concat(Object.getOwnPropertyNames(objectToBeInspected))
    }
    return result
}

/**
 * CRIANDO OBJETOS A PARTIR DE FUNÇÕES CONSTRUTORAS:
 * 1. Defina o tipo de objeto escrevendo uma função construtora. Há uma forte convenção, 
 * e com boa razão, de se usar uma letra inicial maiúscula.
 * 2. Crie uma instância do objeto com new. 
*/

// this será  usado para atribuir valores às propriedades do objeto com base nos valores passados para a função
function Carro(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

var meuCarro = new Carro("Ford", "Mustang GT", 2021)

function Pessoa(nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
}

var umaPessoa = new Pessoa("André", 21, "Masculino")

/**
 * CRIANDO OBJETOS USANDO OBJECT.CREATE()
 * 1. Permite que você escolha o objeto protótipo para o objeto que você quer criar,
 * não sendo necessário a definição de uma função construtura 
*/

var Animal = {
    tipo: 'Invertebrado',
    qualTipo: function () {
        console.log(this.tipo)
    }
}

var criarAnimal = Object.create(Animal)
criarAnimal.qualTipo() // Invertebrados

/**
 * DEFINIDO MÉTODOS:
 * Métodos são funções associadas à objetos, ou, são propriedades de um objeto que é uma função.
 * São definidos da forma que as funções normais são definidas.
*/

nomeDoObjeto.nomeDoMetodo = nomeDaFuncao

var meuObjeto = {
    meuMetodo: function (params) {
        // código à ser executado
    }
}

/**
 * UTILIZANDO THIS PARA REFERÊNCIAS DE OBJETO:
 * Referencia o objeto chamando um método
 * 
 * Vamos exemplificar com a função validate, que irá validar o valor 
 * da propriedade de um objeto
*/

function validate(obj, value1, value2) {
    if ((obj.value < value1) || (obj.value > value2)) {
        alert("Valor Inválido!")
    }
}

// Note que seria possível chamar a funcao validate no manipulador do evento onChange em cada elemento
// do formulário, usando this para passar o elemento:

<input type="text" name="age" size="3"
    onChange="validate(this, 18, 99)"></input>

/** 
 * REMOVENDO UMA PROPRIEDADE DE UM OBJETO:
 * É possível a remoção de uma propriedade não herdada utilizando o operador delete
*/

var myObject = new Object
myObject.value = 5
myObject.secondValue = 10

delete myObject.value
console.log('value' in myObject) // false

/**
 * COMPARANDO OBJETOS:
 * Em JS, objetos são um tipo de referência. Dois objetos distintos nunca são iguais, mesmo que tenham
 * as mesmas propriedades. Ao comparar o mesmo objeto de referência com ele mesmo, produz verdadeiro (true) 
*/

// 1. Duas variáveis, dois objetos distintos com as mesmas propriedades
var fruit = { name: 'Maçã' }
var fruitBear = { name: 'Maçã' }

fruit == fruitBear // false
fruit === fruitBear // false

// 2. Duas variáveis, um único objeto
var fruit = { name: 'Maçã' }
var fruitBear = fruit

fruit == fruitBear // true
fruit === fruitBear // true
