/**
 * Objeto global do Node
 * 
 * console.log(global)
 * 
 * Ao mexer com um objeto compartilhado, global, a chance de problemas aparecerem é maior, 
 * por isso, o sistema de módulos do Node veio para, justamente, resolve estes problemas
 * 
 * Mostrando como poderia ser feito para criar um objeto global personalizado
 */

global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'
}

// Uma vez que esse módulo for lido, e ter sido, de fato, adicionado como global, qualquer arquivo do sistema terá acesso a MinhaApp