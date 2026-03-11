<<<<<<< HEAD
const frm = document.querySelector("form");
const button = document.getElementById("button");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nomeAluno = document.getElementById("nameAluno").value;
    const primeiraNota = parseFloat(document.getElementById ("fNote").value);
    const segundaNota = parseFloat(document.getElementById ("sNote").value);
    const primeiraSaida = document.getElementById("primeira-saida");
    const segundaSaida = document.getElementById("segunda-saida");
    let media = (primeiraNota + segundaNota)/2;
    if(media > 7.0){
        primeiraSaida.textContent = `Média das Notas ${media}`;
        segundaSaida.textContent = `Parabéns ${nomeAluno}! Você foi aprovado(a)`;
        primeiraSaida.style.color = "green";
        segundaSaida.style.color = "green";
    }else{
        primeiraSaida.textContent = `Média das Notas ${media}`;
        segundaSaida.textContent = `Que pena ${nomeAluno}! Você foi reprovado(a)`;
        primeiraSaida.style.color = "red";
        segundaSaida.style.color = "red";
    }
})

=======
const frm = document.querySelector("form");
const button = document.getElementById("button");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nomeAluno = document.getElementById("nameAluno").value;
    const primeiraNota = parseFloat(document.getElementById ("fNote").value);
    const segundaNota = parseFloat(document.getElementById ("sNote").value);
    const primeiraSaida = document.getElementById("primeira-saida");
    const segundaSaida = document.getElementById("segunda-saida");
    let media = (primeiraNota + segundaNota)/2;
    if(media > 7.0){
        primeiraSaida.textContent = `Média das Notas ${media}`;
        segundaSaida.textContent = `Parabéns ${nomeAluno}! Você foi aprovado(a)`;
        primeiraSaida.style.color = "green";
        segundaSaida.style.color = "green";
    }else{
        primeiraSaida.textContent = `Média das Notas ${media}`;
        segundaSaida.textContent = `Que pena ${nomeAluno}! Você foi reprovado(a)`;
        primeiraSaida.style.color = "red";
        segundaSaida.style.color = "red";
    }
})

>>>>>>> 3111f2b4a49f1f856c6cd8077744b7d5e7bcee5c
