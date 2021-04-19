/**
 * Em funções, dentro de JS, parâmetros e retornos são opcionais 
*/
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log('Valor acima do permitido: ', area) // Exibindo mensagem, não havendo retorno, possuindo alternativas como retorno falso, um erro, etc
    } else {
        return area
    }
} 

console.log(area(2, 2)) // 4
console.log(area(2)) // NaN, por não possuir um segundo valor 
console.log(area()) // NaN
console.log(area(2, 3, 4)) // 6 / É possível passar mais parâmetros do que o pedido, porém, não irão ser utilizados
console.log(area(5, 5)) // Valor acima do permitido: 25 / O retorno dessa função foi undefined