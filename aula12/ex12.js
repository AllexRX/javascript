var data = new Date()
var agora = data.getHours()
var minuto = data.getMinutes()
let horas = agora //não é necessáro essa variável aqui, mas vou deixar
console.log(`Agora são exatamente ${horas}:${minuto}`)
if (horas < 5) {
   console.log('Tenha um ótimo dia')
} else if (horas <= 12) {
   console.log('Tenha uma ótima tarde')
} else if(horas <= 18) {
   console.log('Tenha uma ótima noite')
} else if(horas <= 5) {
   console.log('Boa madrugada')
}