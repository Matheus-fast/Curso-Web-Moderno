/**
 * Contexto no qual algo é declarada dentro da linguagem 
*/

const valor = 'Global' // 

function minhaFuncao() { // O contexto léxico no qual essa função foi declarada foi dentro deste arquivo do Node
    console.log(valor) 
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // Global

/**
 * O resultado imprimido através da chamada da função exec() foi 'Global', pois, uma função carrega consigo
 * o local onde ela foi definida, ou seja, irá procurar dentro do escopo léxico de definição ou procurar 
 * o valor próximo mais abrangante
*/