const button = document.getElementById('btn-promotion');

button.addEventListener('click', () => {
    const inProduto = document.getElementById('inProduct').value;
    const inPreco = document.getElementById('inPreco').value;

    const primeiraSaida = document.getElementById('first-out');
    const segundaSaida = document.getElementById('second-out');

    let calculandoPromocao = inPreco*2;
    let desconto = inPreco * 0.5;
    let valorFinal = calculandoPromocao + desconto;

    primeiraSaida.innerHTML = `${inProduto} - Promoção: Leve 3 por R$ ${valorFinal.toFixed(2)}`;
    segundaSaida.innerHTML = `O 3° produto custa apenas R$ ${desconto.toFixed(2)}`;
})