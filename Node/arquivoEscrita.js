const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Para salvar este objeto no disco, é necessário transformá-lo em texto utilizando JSON.stringfy

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // Caso tenha algum erro, a callback será chamada
    console.log(err || 'Arquivo salvo!') // Arquivo salvo!
})