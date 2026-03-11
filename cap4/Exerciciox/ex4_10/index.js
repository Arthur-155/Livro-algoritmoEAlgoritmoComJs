const frm = document.querySelector("form");
const primeiraSaida = document.getElementById("primeiraSaida");
const segundaSaida = document.getElementById("segundaSaida");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ladoA = Number(frm.ladoA.value);
    const ladoB = Number(frm.ladoB.value);
    const ladoC = Number(frm.ladoC.value);
    const somaAB = ladoA + ladoB;
    const somaAC = ladoA + ladoC;
    const somaBC = ladoB + ladoC;

    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {//lado A maior que a soma dos outros 2 lados
        primeiraSaida.textContent = "Lados não podem formar um triângulo";

        if (ladoA == ladoB && ladoA == ladoC) {
            segundaSaida.textContent = "Tipo: Equilátero"
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            segundaSaida.textContent = "Tipo: Isósceles"
        } else {
            segundaSaida.textContent = "Tipo: Escaleno"
        }
    } else {//lado A não é maior que a soma dos 2 lados
        primeiraSaida.textContent = "Lados podem formar um triângulo"
    }

})