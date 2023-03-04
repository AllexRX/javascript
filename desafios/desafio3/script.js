function iniciar() {
   let num = prompt('Digite um numero inteiro qualquer')
   let n = Number(num)
   alerta = document.getElementById('alert')
   alerta.innerHTML = alert(`Antes de ${n}, vem o número ${n - 1}.\n Depois de ${n}, vem o número ${n + 1}`)
}