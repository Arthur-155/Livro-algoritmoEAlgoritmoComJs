const botao = document.getElementById('button');

let calculoEntrada;
let parcelas;

let calculandoTotal;

botao.addEventListener('click', () => {
    const buffetKg = document.getElementById('buffetKg').value;
    const consumoGr = parseFloat(document.getElementById('consumoGr').value);
    const respTotal = document.getElementById('respTotalAPagar');

    calculandoTotal = (buffetKg/1000)*consumoGr

    respTotal.textContent = `Valor a pagar R$: ${calculandoTotal.toFixed(2)}`;

})
