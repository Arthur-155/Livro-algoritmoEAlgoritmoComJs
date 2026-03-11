const botao = document.getElementById('button');

let calculoEntrada;
let parcelas;

botao.addEventListener('click', () => {
    const veiculo = document.getElementById('veiculo').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const respPromocao = document.getElementById('resp-promocao');
    const respEntrada = document.getElementById('resp-entrada');
    const respParcela = document.getElementById('resp-parcela');
    calculoEntrada = preco/2
    parcelas = calculoEntrada/12

    respPromocao.innerHTML = `Promção: ${veiculo}`;
    respEntrada.innerHTML = `Entrada de R$: ${calculoEntrada.toFixed(2)}`;
    respParcela.innerHTML = `+12x de R$: ${parcelas.toFixed(2)}`;
})
