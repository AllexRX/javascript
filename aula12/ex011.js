var idade = 71
if (idade < 16) {
   console.log('Não vota')
} else if (idade < 18 || idade >= 65) {
      console.log('Você tem o voto opcional')
   } else if (idade > 18) {
      console.log('Seu voto é obrigatório')
   }