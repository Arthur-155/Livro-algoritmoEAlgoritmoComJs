const button = document.getElementById('btn-promotion');

button.addEventListener('click', () => {
    const inProduto = document.getElementById('inProduct').value;
    const inPreco = document.getElementById('inPreco').value;

    const primeiraSaida = document.getElementById('first-out');
    const segundaSaida = document.getElementById('second-out');

    primeiraSaida.innerHTML = `${inProduto} - Promoção Leve 3 por R$ 15.00`;
})