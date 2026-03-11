const frm = document.querySelector("form");
const primeiraSaida = document.getElementById("primeira_saida");
const segundaSaida = document.getElementById("segunda_saida");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = Number(document.getElementById("valor").value);
    console.log(valor);
    let troco;
    
    if (valor >= 1 && valor < 1.75) {
        troco = (valor - 1).toFixed(2);
        primeiraSaida.textContent = `Temp 30 min`;
        segundaSaida.textContent = `Troco: R$${troco}`;
    } else if (valor >= 1.75 && valor < 3) {
        troco = (valor - 1.75).toFixed(2);
        primeiraSaida.textContent = `Temp 60 min`;
        segundaSaida.textContent = `Troco: R$${troco}`;
    } else if (valor >= 3) {
        troco = (valor - 3).toFixed(2);
        primeiraSaida.textContent = `Temp 120 min`;
        segundaSaida.textContent = `Troco: R$${troco}`;
    }
})