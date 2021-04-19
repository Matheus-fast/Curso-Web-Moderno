/**
 * Para estar utilizando módulos de terceiros dentro do seu sistema, utilize
 * o gerenciador de pacotes do Node (NPM), responsável por baixar determinadas
 * bibliotecas.
 * 
 * Para iniciar a instalação de uma biblioteca, utilize no terminal npm install <lib>.
 * Estarei exemplificando utilizando a biblioteca lodash.
 * 
 * Ao executar a instalação e obter sucesso, as pastas node_modules, onde estarão 
 * as livrarias instaladas, package-lock.json e package.json serão criadas. 
*/
const _ = require('lodash') // Aqueles que utilizam esta biblioteca, passam _ como padrão

setInterval(() => {
    console.log(_.random(1, 1000), 2000) // Gerando números aleatórios entre 1 e 1000 a cada 2 segs
})

/**
 * Para estar instalando uma bibioteca de forma global, utilize no terminal
 * npm install -global <lib>.
*/