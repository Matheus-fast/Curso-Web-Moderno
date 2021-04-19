/** 
 * @method new Boolean([value]) 
 * 
 * @param value
 * Valor inicial do objeto Boolean
 * 
 * Objetos que iniciarem com 0, -0, null, false, NaN, undefined ou uma string vazia(""),
 * terão seu valor inicial como false. Outros valores, incluindo qualquer objeto ou string 'false', 
 * terão seu valor inicial como true
 * 
 * NÃO CONFUNDIR VALORES PRIMITIVOS BOOLEAN (TRUE/FALSE) COM OS VALORES TRUE E FALSE DO OBJETO BOOLEAN
 * 
 * PROPRIEDADES:
 * @property Boolean.length
 * Propriedade length cujo valor é 1
 * 
 * @property Boolean.prototype 
 * Representa o protótipo para o construtor Boolean
*/

var x = new Boolean(false)
if (x) {
    /**
     * Este código será executado, uma vez que qualquer objeto cujo valor não seja undefined ou null,
     * incluindo um objeto Boolean que o valor seja false, é avaliado para true assim que passar para uma
     * avaliação condicional 
    */
}

var x = false
if (x) {
    /**
     * Este código não será executado, já que o comportamento mencionado acima não se aplica aos primitivos
     * Boolean 
    */
}
