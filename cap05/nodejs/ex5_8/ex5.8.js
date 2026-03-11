//

const prompt = require("prompt-sync")();
console.log("PROGRAMA ANOS DA COPA DO MUNDO!")
console.log("Digite 0 para terminar a execução do código!");
console.log("------------------------------");

let ano;

do{
    ano = Number(prompt("Ano: "));

    if(ano == 1942 || ano == 1946){
        console.log(`No ano ${ano}, Não houve copa do mundo!`);
    }else if(ano >= 1930 && ano % 4==2){
        console.log(`O ano ${ano}, houve copa!`);
    }else if(ano == 0){
        console.log("Saindo...");
    }else{
        console.log(`O ano ${ano} não é um ano de copa do mundo!`);
    }

}while (ano!==0);
