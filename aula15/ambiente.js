let num = [5, 8 , 2, 9, 3]
num.push(1);
//num.sort();
console.log(num);
console.log(`O array tem ${num.length} posições`);
console.log(`O nosso array 0 é o ${num[0]}`);
let pos = num.indexOf(7)
if (pos == -1) {
   console.log("O elemento não está na lista");
} else {
   console.log(`O elemento 8 está na posição ${pos}`);
}