/**
 * Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
 * array recebido como parâmetro.
 * Exemplos:
 * filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
 * filtrarNumeros(["a", "c"]) // retornará []
*/
function filtrarNumeros(arr) {
    let array = []
    for (
        let i = 0;
        i < arr.length;
        i++
    ) {
        if (!isNaN(arr[i])) {
            array.push(arr[i])
        }
    }

    return array
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])) // [ 1, '3', 20]

// Como ele pediu somente os números, a função acima está errada, pois '3' é uma string

function filteringNumbers(arr) {
    let resultado = []
    for (let item of arr) {
        if (typeof item === 'number') {
            resultado.push(item)
        }
    }
    
    return resultado
}

console.log(filteringNumbers(["Javascript", 1, "3", "Web", 20])) // [ 1, 20 ]