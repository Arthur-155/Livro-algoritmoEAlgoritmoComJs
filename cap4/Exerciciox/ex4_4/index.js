<<<<<<< HEAD
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
=======
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
>>>>>>> 3111f2b4a49f1f856c6cd8077744b7d5e7bcee5c
})