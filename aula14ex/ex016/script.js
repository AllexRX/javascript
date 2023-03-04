function criar() {
   let inicio = document.getElementById('id_inicio');
   let fim = document.getElementById('id_fim');
   let passo = document.getElementById('id_passo');
   let resultado = document.getElementById('res');
   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
      resultado.innerHTML = '[ERROR] Informe todos os campos'
   } else {
      resultado.innerHTML = 'Contando: <br>'
      let ini = Number(inicio.value)
      let f = Number(fim.value)
      let p = Number(passo.value)
      if (p <= 0) {
         alert('Passo invalido, considerando passo 1')
         p = 1
      }
      if (ini < f) {
         // contagem crescente
         for(let c = ini; c <= f; c += p) {
            resultado.innerHTML += `${c}, \u{1F449}`
         }
      } else {
         // contagem decrescente
         for(let c = ini; c >= f; c -= p)
         resultado.innerHTML += `${c}, \u{1F449}`
      }
      resultado.innerHTML += `\u{1F3C1}`
   }
}  