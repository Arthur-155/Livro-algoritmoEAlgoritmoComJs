const prompt = require("prompt-sync")();
let numChinchilas = Number(prompt("Digite o número de chinchilas que você possui: "));
const numAnos = Number(prompt("Digite o número de anos: "));

if (numChinchilas < 2) {
    console.log("Numero de chinchilas inválido, deve ser no mínimo 2 (Um casal)");
    console.log("Digite novamente");
    numChinchilas = Number(prompt("Digite o número de chinchilas que você possui: "));
}

let totalChinchilas = numChinchilas;

for (let i = 1; i <= numAnos; i++) {
    console.log(`${i}° Ano: ${totalChinchilas} Chinchilas`);
    totalChinchilas = totalChinchilas * 3;
}

