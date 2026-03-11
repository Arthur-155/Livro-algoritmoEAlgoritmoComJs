<<<<<<< HEAD
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const horaInserida = Number(frm.hora.value);
    console.log(horaInserida)
    let horaFranca = horaInserida +5
    if(horaFranca>24){
        horaFranca = horaFranca -24
    }
    
    resp.textContent = `Hora na França: ${horaFranca.toFixed(2)}`
=======
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const horaInserida = Number(frm.hora.value);
    console.log(horaInserida)
    let horaFranca = horaInserida +5
    if(horaFranca>24){
        horaFranca = horaFranca -24
    }
    
    resp.textContent = `Hora na França: ${horaFranca.toFixed(2)}`
>>>>>>> 3111f2b4a49f1f856c6cd8077744b7d5e7bcee5c
})