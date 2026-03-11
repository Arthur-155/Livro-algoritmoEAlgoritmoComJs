const prompt = require("prompt-sync")();
const valorConta = prompt(Number("Digite o Valor da compra: "));
const numParcelas = prompt(Number("Digite o número vezes que deseja parcelar: "));
let valorParcelas = Math.floor(numParcelas/valorConta);//pega o valor das parcelas, sem centavos.
let valorFinalParcela = valorParcelas + (valorConta %valorParcelas);//
for(let i = 1; i < numParcelas; i++){
    console.log(`${i}º Parcela: R$${valorParcelas.toFixed(2)}`);
}
console.log(`${numParcelas}° Parcela: ${valorFinalParcela.toFixed(2)}`);