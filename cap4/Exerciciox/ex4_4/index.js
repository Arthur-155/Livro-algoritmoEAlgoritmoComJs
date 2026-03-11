const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numeroInserido = Number(frm.numero.value);
    let raizQuadrada = Math.sqrt(numeroInserido);
    if(Number.isInteger(raizQuadrada)){
        resp.textContent = `Raiz: ${raizQuadrada}`;
    }else{
        resp.textContent = `O número informado não resulta em uma raiz perfeita`;
    }
})