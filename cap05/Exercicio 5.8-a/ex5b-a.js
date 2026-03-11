const prompt = require("prompt-sync")();
const frutas = prompt("Digite o nome da fruta que deseja: ");
let numRepeticao = Number(prompt("Digite o número de vezes que deseja repetir: "));
for(let i=0; i<numRepeticao; i++){
    process.stdout.write(`${frutas} * `);
}