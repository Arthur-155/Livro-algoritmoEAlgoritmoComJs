const prompt = require('prompt-sync')();
const veiculo = prompt("Veiculo: ");
const preco = Number(prompt("Preço: "));
const entrada = preco * 0.5;
const parcelas = (preco * 0.50) / 12 ; 
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada: R$ ${entrada.toFixed(2)}`);
console.log(`12x de R$ ${parcelas.toFixed(2)}`);