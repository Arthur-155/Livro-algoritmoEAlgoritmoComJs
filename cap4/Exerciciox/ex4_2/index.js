const frm = document.querySelector("form");
const saida = document.querySelector("#first-saida");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.name.value;
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.Altura.value);


    //let peso;

    const peso = masculino ? 22*Math.pow(altura,2) : 21*Math.pow(altura,2);

    // if(masculino){
    //     peso = 22*Math.pow(altura,2)
    // }else{
    //     peso = 21*Math.pow(altura,2);
    // }

    saida.innerHTML = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`
})

frm.addEventListener("reset", () => {
    saida.textContent = " ";
})