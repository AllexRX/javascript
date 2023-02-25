var agora = new Date()
var agora = agora.getHours()
let horas = agora
console.log(`Agora são exatamente ${horas} horas`)
if (horas < 5) {
   console.log('Tenha um ótimo dia')
} else if (horas <= 12) {
   console.log('Tenha uma ótima tarde')
} else if(horas <= 18) {
   console.log('Tenha uma ótima noite')
} else if(horas <= 5) {
   console.log('Boa madrugada')
}