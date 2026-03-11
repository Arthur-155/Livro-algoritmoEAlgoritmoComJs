const button = document.getElementById('btnValorFinal');

let lendoValor;
let ValorTempo;
button.addEventListener('click', () => {
    const ValorPorMinuto = parseFloat(document.getElementById('inValue').value);
    const tempo = parseFloat(document.getElementById('inTime').value)
    const saida = document.getElementById('outValorPagar');
    if(tempo <= 15){
        ValorTempo = ValorPorMinuto;
        saida.textContent = `Valor a pagar: R$ ${ValorTempo.toFixed(2)}`;
    }else if(tempo > 15 && tempo <= 30){
        ValorTempo = ValorPorMinuto *2;
        saida.textContent = `Valor a pagar: R$ ${ValorTempo.toFixed(2)}`;
    }


})