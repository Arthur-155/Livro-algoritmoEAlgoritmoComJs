const valorConta = Number(prompt("Qual o valor da conta: "));
const qtdClientes = Number(prompt("Qual o número de clientes: "));

let valorPorCliente = valorConta/qtdClientes;

alert(`Valor da conta: ${valorConta}\nNumero de clientes: ${qtdClientes}\nValor Por cliente: ${valorPorCliente}`);