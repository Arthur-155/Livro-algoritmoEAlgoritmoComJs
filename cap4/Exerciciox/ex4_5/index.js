const frm = document.querySelector("form");
const saida1 = document.getElementById("saida1");
const saida2 = document.getElementById("saida2");
const saida3 = document.getElementById("saida3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const saque = Number(frm.valorInserido.value);
    if(saque % 10 != 0){
        alert("Valor inválido para as notas de 10,50 e 100");
        frm.valorInserido.focus();
        return
    }

    const notasCem = Math.floor(saque/100);
    let resto = saque % 100
    const notasCinquenta = Math.floor(resto/50);
    resto = resto % 50;
    const notasDez = Math.floor(resto/10);

    if(notasCem>0){
        saida1.innerHTML = `Notas de R$100: ${notasCem}`;
    }
    if(notasCinquenta>0){
        saida2.innerHTML = `Notas de R$50: ${notasCinquenta}`;
    }
    if(notasDez > 0){
        saida3.innerHTML = `Notas de R$10: ${notasDez}`;
    }
})