let num = document.querySelector('input#num'); 
let lista = document.querySelector('select#numeros_valores');
let res = document.querySelector('div#res')
let valores = []; //aqui foi declarado um array vazio para ser usado mais para frente adicionando os numeros da lista

function numero(n) { // função criada para verificar se os numeros estão corretos
   if (Number(n) >= 1 && Number(n) <= 100) {
      return true;
   } else {
      return false;
   }
}

function inlista(n , l) {
   if (l.indexOf(Number(n)) != -1){
      return true;
   } else {
      return false;
   }
}

function adicionar() {
   if(numero(num.value) && !inlista(num.value, valores)) {
      valores.push(Number(num.value));
      let item = document.createElement('option');
      item.text = `Valor ${num.value} adicionado`;
      lista.appendChild(item);
      res.innerHTML = ``;
   } else {
      alert('Número invalido ou já existente na lista');
   }
   num.value = '';
   num.focus();
}

function finalizar() {
   if (valores.length == 0) {
      alert('Nenhum valor adicionado, adicione valores antes de finalizar.');
   } else {
      tot = valores.length
      let maior = valores[0];
      let menor = valores[0];
      let soma = 0;
      let media = 0;
      for(let pos in valores) {
         soma += valores[pos];
         if (valores[pos] > maior) {
            maior = valores[pos];
         } else if (valores[pos] < menor) {
         menor = valores[pos];
         }
      }
      media = soma / tot
      res.innerHTML = ``
      res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`;
      res.innerHTML += `<p>O maior valor foi ${maior} e o menor ${menor}</p>`;
      res.innerHTML += `<p>A soma entre os valores digitados pelos usuários é equivalente a ${soma}</p>`;
      res.innerHTML +=  `<p> A média dos valores é ${media.toFixed(2)}</p>`;
   }
}