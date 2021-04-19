/**
 * Paradigma Procedural:
 * Código não executável, baseado no procedimento, onde há um trecho de código,
 * este é nomeado e reutilizado em várias áreas do código.
 * 
 * Em linguagens procedurais, o foco é voltado ao procedimento.
 * 
 * @method processamento(valores)
 * 
 * OO:
 * Funciona como uma cápsula, o qual agrupa valores e funções. E, o invocamento desses
 * processamentos é dado a partir do objeto
 */

// Exemplificações OO
objeto = {
    valor, 
    valor2, 
    valor3,
    processamento() {
        // ...
    }
}

objeto.processamento() // Foco passou a ser o objeto

/**
 * Princípios Importantes:
 * 1. Abstração: Selecionar um objeto da vida real e o criar dentro de um sistema
 * 2. Encapsulamento: Obter detalhes de implementação escondidos e os mostrar para um 
 * cliente de forma simples de como interajir com determinado objeto
 * 3. Herança ('É um...'): Receber atributos/comportamentos de um objeto PAI. Em JS, a herança é 
 * implementada em cima do conceito de prototype (O ser humano é um mamífero; Ferrari é um carro;)
 * 
 * Obs: Priorizar a composição (relação "tem um...") ao invés da herança
 * 
 * 4. Polimorfismo: Possui múltiplas formas
 */