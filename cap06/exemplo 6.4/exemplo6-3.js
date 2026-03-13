const frm = document.querySelector("form");
const respFinal = document.querySelector("pre");
const infoIdade = document.querySelector("#inIdade");
const infoNome = document.querySelector("#inNome");

let criancas = [];
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = infoNome.value;
    const idade = Number(infoIdade.value);
    criancas.push({ nome, idade });

    frm.inIdade.value = "";
    frm.inNome.value = "";
})

frm.btnListar.addEventListener("click", () => {
    const listaCrianca = criancas.map(aux => ({ nome: aux.nome, idade: aux.idade }));

    let listaC = "";

    for (const lista of listaCrianca) {
        listaC += `${lista.nome} - ${lista.idade}\n`;
    }
    respFinal.innerText = listaC;
})

frm.btnResumir.addEventListener("click", () => {
    if(criancas.length == 0){
        respFinal.innerText = "Nenhuma criança foi adicionada até o momento!"
        return;
    }

    const copia = [...criancas];
    copia.sort((a, b) => a.idade - b.idade);

    let resumo = "";
    let aux = copia[0].idade;
    let nomes = [];

    for (const crianca of copia) {
        const {nome, idade} = crianca;
        if (idade == aux) {
            nomes.push(nome);
        } else {
            resumo += `${aux} anos(s): ${nomes.length} criança(s) - `
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = idade;
            nomes = [];
            nomes.push(nome);
        }
    }
    resumo += `${aux} anos(s): ${nomes.length} criança(s) - `
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";
    respFinal.innerText = resumo;
})

