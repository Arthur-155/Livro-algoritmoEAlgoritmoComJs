//ler o total de uma compra
//mostrar o numero máximo de vezes que o cliente pode parcelar a compra e o valor de cada parcela
//Cada parcela deve ser de no minimo 20,00
//O número máximo de parcelas permitido é 6

const prompt = require("prompt-sync")()
const totalCompra = Number(prompt("Digite o total da compra: "));
let parcelas, melhorParcela, melhorValorParcela, valorParcelas;
melhorParcela = 1;
melhorValorParcela = `${totalCompra},00`
for (parcelas = 1; parcelas <= 6; parcelas++) {
    valorParcelas = totalCompra / parcelas;
    if (valorParcelas >= 20) {
        melhorParcela = parcelas;
        melhorValorParcela = valorParcelas;
    } else {
        break;
    }

}

console.log(`Valor total da compra ${totalCompra}`);
console.log(`Parcelado em ${melhorParcela}x de ${melhorValorParcela}`)
