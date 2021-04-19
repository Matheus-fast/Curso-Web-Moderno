/**
 * This dentro de uma função arrow é fixo, ele é baseado no contexto
 * no qual a função foi escrita, não sendo influenciado pelo chamamento 
 * da função de locais diferentes.
 * 
 * Exemplo referenciando o arquivo This&Bind2.js
*/

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ // Não irá variar nesse contexto, dentro da função Pessoa 
        console.log(this.idade) // 1 2 3 4 5 6 7 8 ... 1000
    }, 2000)
}

new Pessoa