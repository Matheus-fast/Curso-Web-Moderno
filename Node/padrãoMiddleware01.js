/**
 * Utilizando o padrão Middleware antes de dar início ao Express.
 * 
 * Trata-se de uma implementação do padrão intercepting filter pattern do chain of responsibility.
 * Implementação essa que representa um pipeline de processamento onde handlers, unit e filters são
 * funções. Estas funções são conectadas criando uma sequência de processamento assíncrona, permitindo
 * pré-processamento, processamento e pós-processamento de qualquer tipo de dado.
 * 
 *                           MIDDLEWARE MANAGER
 * --------------------------------------------------------------------
 * input                                                       output |
 * -----> MIDDLEWARE A -----> MIDDLEWARE B -----> MIDDLEWARE C -----> |
 * --------------------------------------------------------------------
 * 
 * • Middleware Manager - Responsável por organizar e executar as funções;
 * • Novos middlewares podem ser invocados usando a função use() (Não obrigatoriamente precisa ser use());
 * • Cada unidade no pipeline recebe o resultado da anterior como input;
 * • Cada parte do middleware pode parar o processamento não chamando o callback, ou em caso de erro,
 * passando o erro pelo próprio callback.
 * 
 * -------------------------------------------------------------------
 * input                                   ERROR              output |
 * -----> MIDLEWARE A -----> MIDDLEWARE B --X--> MIDDLEWARE C --X--> |
 *                                     ⇲                             |
 *                                                     output        |
 *                                        MIDDLEWARE X ----->        |
 * -------------------------------------------------------------------
 * 
 * No express, o caminho padrão espera os parâmetros request, response e next, caso receba um quarto parâmetro,
 * irá buscar por um caminho diferente. 
 * 
 * Estratégias de processamento dos dados no pipeline:
 * • Incrementar os dados com propriedades ou funções;
 * • Substituir os dados com o resultado de algum tipo de processamento;
 * • Manter a imutabilidade dos dados sempre retornando uma cópia como resultado do processamento.
 * 
 * A implementação correta depende de como o Middleware Manager é implementado e do tipo de dados que serão processados no próprio middleware.
*/