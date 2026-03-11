//entrada =20 p/pessoa
//cada pessoa tem direito a levar 1 peixe
//peixes extras valem 12,00


const prompt = require("prompt-sync")();
const qtdPessoas = Number(prompt("Número de pessoas: "));
const qtdPeixes = Number(prompt("Número de peixes obtidos: "));
let pagar;
if(qtdPessoas < qtdPeixes){
    pagar = 20*qtdPessoas+12;
}else{
    pagar = 20*qtdPessoas
}

console.log(`Pagar: R$${pagar}`);