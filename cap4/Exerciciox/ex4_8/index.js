const frm = document.querySelector("form");
const saida = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const velPermitida = Number(document.getElementById("veloPermitida").value);
    const velCondutor = Number(document.getElementById("veloCondutor").value);

    const multaLeve = velPermitida*1.20;
    

    if(velCondutor<=velPermitida){
        saida.textContent = `Situação: Sem multa`;
    }else if(velCondutor<=multaLeve){
        saida.textContent = `Situação: Multa Leve`
    }else if(velCondutor>multaLeve){
        saida.textContent = `Situação: Multa Grave`
    }

})