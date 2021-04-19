/**
 * Mostrando como estar lendo arquivos no Node utilizando o módulo interno fs 
*/

const fs = require('fs')

const caminho = __dirname + '/Arquivo.json'

// Lendo um arquivo de forma sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8') // Utilize o mesmo encode ('utf-8') em que o código foi escrito no editor
console.log(conteudo) // { "db": { "host": "localhost", "port": "5432", "user": "usuario", "pass": "123456" }

// Lendo um arquivo de forma assincrona
fs.readFile(caminho, 'utf-8', (err, content) => { // Uma callback será passada e, quando o arquivo tiver sido lido, essa callback será chamada
    const config = JSON.parse(content) // Transformando em objeto
    console.log(`${config.db.host}:${config.db.port}`) // localhost:5432
}) 

// Forma de ler um arquivo JSON muito mais simples
const config = require('./Arquivo.json')
console.log(config.db) // { host: 'localhost', port: '5432', user: 'usuario', pass: '123456' }

// Lendo uma pasta 
fs.readdir(__dirname, (err, files) => { // Callback com erro e conteúdo dos arquivos presentes no diretório
    console.log(files) // [ 'Arquivo.json', 'ArquivoLeitura.js', 'Desafio.js', 'Exportação', 'Global.js', 'GlobalCliente.js', ... ]
}) 

// __dirname é uma constante que está presente em todos os módulos do Node, que representa o diretório atual.