/**
 * Utilizando o Node como servidor, ele pode funcionar como apache, pode ser um 
 * servidor web, que provê páginas, arquivos, imagens e conteúdos dinâmicos e, também,
 * pode servir como API do seu sistema.
 * 
 * Uma aplicação back-end, em Node, é organizada por pastas e arquivos, e cada arquivo
 * representa um módulo. E o que significa esse módulo? Significa que ele possui uma
 * certa interioridade, ou seja, um módulo não é disponibilizado para todos os arquivos, 
 * ele ficará visível somente dentro daquele módulo.
 * 
 * Para tornar um módulo público, acessível para outros arquivos, tornará-se útil 
 * o método de exportação presente no Node. 
 * 
 * Formas de como exportar algo de dentro de um módulo no Node:
 */

console.log(this, exports, module.exports) // {} {} {} / Por serem objetos vazios, é possível adicionar atributos

this.ola = 'Fala, pessoal!' // ola, bemVindo e ateLogo foram criados dentro dos objetos
exports.bemVindo = 'Bem vindo ao Node!'
module.exports.ateLogo = 'Até o próximo exemplo!'

console.log(typeof this, typeof exports, typeof module.exports) // Object Object Object

