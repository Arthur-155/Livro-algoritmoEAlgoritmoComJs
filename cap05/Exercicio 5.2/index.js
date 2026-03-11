const frm = document.querySelector("form");
const saida = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const num = Number(frm.num.value);
    let resultado = "";
    for(i=num; i>0; i--){   
        resultado = resultado+i+ ", "
    }
    saida.textContent = `Entre ${num} e 1: ${resultado}`;
})