//elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa.
//Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um recebe um acrescimo de 1% no salário
//Calcule e informe o númeroo de quadriênios a que o funcionário tem direito e o salário final.

const prompt = require('prompt-sync')();
const nome = prompt('Digite o nome do funcionário: ');
const salario = Number(prompt('Digite o salário do funcionário: '));
const tempo = Number(prompt('Digite o tempo de serviço do funcionário (em anos): '));
const quadri = Math.floor(tempo / 4);
let ajusteSal = 0.01 * quadri * salario;
const salarioFinal = salario + ajusteSal;
console.log(`O funcionário ${nome} tem direito a ${quadri} quadriênios e o salário final é R$${salarioFinal.toFixed(2)}`);
