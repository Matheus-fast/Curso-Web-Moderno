/**
 * Utilizando o operador destructuring para extrair dados aninhados de um array 
 * 
 * CÓDIGOS DE DIFÍCIL LEITURA NÃO É UMA BOA PRÁTICA
*/

// Criando uma variável e atribuindo o valor do primeiro elemento do array
const [a] = [10] 

// Criando múltiplas variáveis a partir de uma única chamada
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) // 10, 9, undefined, 0

// O primeiro elemento foi ignorado, o segundo elemento é 
// um outro array e o primeiro elemento desse array está sendo ignorado
const [, [, nota]] = [[, 8, 9], [9, 6, 8]] 

// Ignore o primeiro elemento do array externo
// e vá direto para o segundo elemento do segundo array 