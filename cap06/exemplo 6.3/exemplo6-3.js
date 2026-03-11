const respModelo = document.querySelector("#inModelo");
const respPreco = document.querySelector("#inPreco")
const frm = document.querySelector("form");
const respFinal = document.querySelector("pre");


const carros = [];
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = respModelo.value;
    const preco = Number(respPreco.value);
    carros.push({ modelo, preco });

    frm.inModelo.value = "";
    frm.inPreco.value = "";
})

frm.btListar.addEventListener("click", () => {
    if (carros.length == 0) {
        alert("Não tem carros adicionados a lista!");
        return;
    }

    const resultado = carros.reduce((acumulador, carro) => acumulador + `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`, "");
    respFinal.innerText = `------ Lista dos Carros Cadastrados ------ \n\n${resultado}`;
})

frm.btFiltrar.addEventListener("click", () => {
    const valorDesejado = Number(prompt("Deseja filtrar carros à partir de qual valor?"));
    const resultado = carros.filter(car => car.preco >= valorDesejado)
    respFinal.innerText = resultado.map(car => `${car.modelo} - R$: ${car.preco.toFixed(2)}\n`);

})

frm.btSimular.addEventListener("click", () => {
    const descontoDesejado = Number(prompt("Quanto de desconto deseja simular sobre o valor dos carros ?"));
    const valorDescontado = carros.map(car => ({
        modelo: car.modelo,
        preco: car.preco - (car.preco * descontoDesejado / 100)
    }));

    let lista = "";
    for (const carro of valorDescontado){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }

    respFinal.innerText = `Carros com ${descontoDesejado}% de desconto \n${lista}`;
})