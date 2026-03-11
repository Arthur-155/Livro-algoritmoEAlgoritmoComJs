const preco = Number(prompt("Qual o preço do produto: "));

let avista = preco*0.90;
let parcelado = preco/3;

alert(`Preço: ${preco}\nÀ Vista: ${avista}\nou 3x de: ${parcelado}`);