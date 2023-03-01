function verificar() {
   var data = new Date(); //cria uma variavel que pega a data do seu pc
   var ano = data.getFullYear(); //variavel que pega o número do ano do seu pc
   var formano = document.getElementById('ano'); /* Vai pegar o conteudo do input que vc inseriu o ano */
   var res = document.getElementById('res'); 
   if (formano.value.length == 0 || Number(formano.value) > ano) {
      res.innerHTML = '<span>[ERROR]Data inválida</span>'; /*Se o valor de ano não exisitir (não tiver sido preenhido) vai aparecer uma mensagem dizendo que a data é invalida */
   } else {
      var img = document.createElement('img') //vai criar uma tag img no html
      img.setAttribute('id', 'foto') //vai criar um id para a tag img com o nome foto
      img.style.paddingTop = '10px'
      var fsex = document.getElementsByName('radsex'); /* cria uma variavel chamada fsex que vai pegar o que foi prenchido no input radio de name = radsex */
      var idade = ano - Number(formano.value); /* Cria uma variavel chamada "idade" que vai calcular o a sua idade fazendo o ano atual - o valor inserido pelo usuario*/
      var genero = '' //cria uma variavel "genero" com o valor vazio
      if (fsex[0].checked) { /* vai verificar o sexo e decidir o que vai ser aplicado */
         genero = 'Homem'
         if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'foto-bebe-m.png');
         } else if (idade < 25) {
            img.setAttribute('src', 'foto-jovem-m.png');
         } else if (idade < 50) {
            img.setAttribute('src', 'foto-adulto-m.png');
         } else {
            img.setAttribute('src', 'foto-idoso-m.png');
         }

      } else {
         genero = 'Mulher'
         if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'foto-bebe-f.png');
         } else if (idade < 25) {
            img.setAttribute('src', 'foto-jovem-f.png');
         } else if (idade < 50) {
            img.setAttribute('src', 'foto-adulto-f.png');
         } else {
            img.setAttribute('src', 'foto-idoso-f.png');
         }

      }
      res.style.textAlign = 'center' //vai alinhar o texto do resultado no centro
      res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
      res.appendChild(img) //vai inserir o img logo a baixo da propriedade a cima
      res.style.display = 'flex'
      res.style.justifyContent = 'center'
      res.style.flexDirection = 'column'
      img.style.width = '250px'
      img.style.height = '250px'
      img.style.margin = 'auto'
   }
}