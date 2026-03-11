<<<<<<< HEAD
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

=======
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

>>>>>>> 3111f2b4a49f1f856c6cd8077744b7d5e7bcee5c
console.log(`Pagar: R$${pagar}`);