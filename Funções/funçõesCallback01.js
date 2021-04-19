/**
 * Callback ('Chamar de volta'):
 * Uma função callback é uma função passada como argumento para outra função e, 
 * quando um determinado evento for emitido, a função passada será chamada de volta 
 * 
 * Todo callback recebe 3 parâmetros:
 * 1. Elemento
 * 2. Índice
 * 3. Array, o próprio array 
*/

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) // Assinatura de função que pode ser passada para uma função forEach
}

/**
 * forEach torna-se uma função de fabricantes (array) e, pra cada elemento do array, 
 * a função imprimir é chamada.
 * forEach passará como parâmetros o nome do elemento percorrido e seu índice 
*/

fabricantes.forEach(imprimir) // 1. Mercedes 2. Audi 3. BMW
fabricantes.forEach(fabricante => console.log(fabricante)) // Mercedes Audi BMW