const prompt = require('prompt-sync')();
const pesoRacao = Number(prompt("Peso da Ração(kg): "));
const consumoDiario = Number(prompt("Consumo Diário(gr): "));
let convertendoKg = pesoRacao*1000;
const sobra = convertendoKg%consumoDiario;
const duracao = Math.floor(convertendoKg/consumoDiario);
console.log(`Duração: ${duracao}`);
console.log(`Sobra: ${sobra}gr`)