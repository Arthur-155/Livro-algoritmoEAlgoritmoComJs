console.log("ok")

const button = document.getElementById('btnPromotion');
button.addEventListener('click', () => {
    const inMed = document.getElementById('inMed').value;
    const inPreco = document.getElementById('inPreco').value;
    const outInfoProm = document.getElementById('outInfoProm');
    const outProm = document.getElementById('outProm');


    dobroInPreco = Math.floor(inPreco * 2);
    outProm.textContent = `Leve 2 por apenas R$ ${dobroInPreco.toFixed(2)}`;
    outInfoProm.textContent = `Promoção de ${inMed}`;
})
