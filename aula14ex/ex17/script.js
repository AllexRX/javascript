function tabuada() {
   let numero = document.getElementById('numero');
   let tab = document.getElementById('seltab');
   if (numero.value.length == 0) { //para especificar que a condição é com um numero vazio vc precisa digitar esse comando
      alert('Não foi possível encontrar o número');
   } else {
      let mult = Number(numero.value); //vai pegar o valor numero da variavel "numero"
      let c = 1 
      tab.innerHTML = ''// vai fazer com que a campo seja limpo para não ficar uma tabuada em cima da outra
      while (c <= 10) {
         let item = document.createElement('option'); //permite criar um elemento HTML diretamento do JS
         item.text = `${mult} x ${c} = ${mult*c}`;
         item.value = `tab${c}` //isso para o JS não faz muito sentido, mas para outras linguagens faz
         tab.appendChild(item); // vai adicionar um item a baixo do item de cima
         c++ /* vai fazer com que o numero da multiplicação aumente, desse modo, não vai ficar sendo multiplicado por 1 o tempo todo */
      }
   }
}
