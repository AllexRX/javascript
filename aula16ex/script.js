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
      alert('Tudo ok');
   } else {
      alert('Número invalido ou já existente na lista');
   }
}