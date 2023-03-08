
function comprar() {
   let nome_produto = prompt('Que Produto você está comprando?');
   let valor_produto = prompt(`Quanto custa o ${nome_produto} que você está comprando?`);
   let seu_pagamento = prompt(`Qual valor que você deu para pagar ${nome_produto}?`);
   let troco = Number(seu_pagamento) - Number(valor_produto);
   alert(`Você comprou ${nome_produto} que custou ${valor_produto}.\nDeu R$${seu_pagamento} em dinheiro e vai receber ${troco}.\nVolte sempre!`);
}