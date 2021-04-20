const schedule = require('node-schedule')

/**
 * /5 - De 5 segundos em 5 segundos
 * * - A qualquer minuto
 * 12 - Às 12 horas
 * * - Em qualquer dia do mês
 * * - Em qualquer mês
 * 2 - Toda terça feira (0 - domingo, 1 - segunda, 2 - terça, ...)  
*/

const tarefa = schedule.scheduleJob('*/5 * 12 * * 2', function () {
    console.log('Executando tarefa.', new Date().getSeconds()) // Mensagem enviada ao console a cada 5 segundos
}) 

// Cancelando o temporizador criado a partir do scheduleJob
setTimeout(function () {
    tarefa.cancel()
    console.log('Cancelando tarefa.')
}, 20000)


// Regra de recorrência
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // Executando de segunda a sexta
regra.hour = 12 // Às 12 horas
regra.second = 30 // No minuto 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2.', new Date().getSeconds())
})