const frm = document.querySelector("form");
const saida = document.querySelector("h3");


frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const numero = document.getElementById("numero").value;
    let conferindoTipo = numero % 2;
    console.log(conferindoTipo)

    conferindoTipo === 0 ? saida.textContent = `${numero} é par` : saida.textContent = `${numero} é impar`;
 
})