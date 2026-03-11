const prompt = require('prompt-sync')();
const produto = prompt("Insira o nome do produto: ");
const numEtiqueta = prompt("Insira a quantidade de etiquetas: ");
for (let i = 1; i<= numEtiqueta/2; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`);
}
if(numEtiqueta%2 == 1){
    console.log(produto);
}