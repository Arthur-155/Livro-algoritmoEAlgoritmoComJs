const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = [];
const sorteado = Math.floor(Math.random() * 100)+1;
const CHANCES = 6;
console.log(sorteado);

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numeroDigitado = frm.inNumero.value;
    
    if(numeroDigitado == sorteado){
        respDica.innerHTML = `Acertou!!!`;
        frm.btnSubmit.disabled = true;
        frm.btnNovo.className = "exibe";
    }else{
        if(erros.includes(numeroDigitado)){
            alert(`Você já apostou o número ${numeroDigitado} meu compradre.`)
        }else{
            erros.push(numeroDigitado);

            const numErros = erros.length;
            const numChances = CHANCES - numErros;
            respErros.innerHTML = erros.join(" - ")
            respChances.innerHTML = numChances;
            if(numChances == 0){
                alert("Suas chances acabaram...")
                frm.btnSubmit.disabled = true;
                frm.btnNovo.className = "exibe";
                respDica.innerHTML = `Game Over bratan! O número sorteado foi o ${sorteado}`;
            }else{
                const dica = numeroDigitado < sorteado ? "Maior" : "Menor";
                respDica.innerHTML = `Dica: Tente um número ${dica} que ${numeroDigitado}`;
            }
        }
    }
})
     
frm.btnNovo.addEventListener("click", () => {
    location.reload();
})
