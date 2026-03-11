const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.numero.value);
    let resposta = "";
    for (let i = 0; i < 11; i++) {
        let resultado = i*num;
        resposta += `${num} X ${i} = ${resultado}\n`;
    }
    resp.textContent = resposta;
    
})