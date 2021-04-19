/**
 * Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
 * que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 * Exemplos:
 * repetir("código", 2) // retornará ["código", "código"]
 * repetir(7, 3) // retornará [7, 7, 7]
*/

function repetir(param1, param2) {
    let arr = []
    for(
        let i = 0;
        i < param2;
        i++
    ) {
        arr.push(param1)
    }
    
    return arr
}

console.log(repetir(1, 2)) // [1, 1]
console.log(repetir(7, 3)) // [7, 7, 7]