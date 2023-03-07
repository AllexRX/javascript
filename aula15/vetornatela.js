let valores = [8, 1, 4, 7, 2, 9];
valores.sort();
/*
for(let pos=0; pos<valores.length; pos++) {
   console.log(`A posção ${pos} tem o valor ${valores[pos]}`);
}
*/
for(let pos in valores) {
   console.log(`A posção ${pos} tem o valor ${valores[pos]}`);
}