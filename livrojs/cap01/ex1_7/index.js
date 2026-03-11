const valorDoJantar = Number(prompt("Qual foi o valor do jantar? "));

let calculandoValorDaTaxa = valorDoJantar*0.10;
alert("O valor da taxa do garçom é: " +  calculandoValorDaTaxa);
let valorFinal = valorDoJantar+calculandoValorDaTaxa;
alert("Valor final da compra é: " + valorFinal);
