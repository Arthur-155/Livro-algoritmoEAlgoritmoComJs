const prompt = require("prompt-sync")();
const trueNumber = Number(prompt("Digite um número: "));


let soma = 0
for(let i = 0; i<=trueNumber; i++){
    if(trueNumber % i == 0){
        console.log(`${i}, `);
        
        soma += i;
    }
}

let positivo = soma === trueNumber;

positivo ? console.log("O número é perfeito!") : console.log("O número não é perfeito!");

