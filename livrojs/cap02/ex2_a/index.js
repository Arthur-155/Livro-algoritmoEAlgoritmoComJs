const botaoConverter = document.getElementById('convertendo');

botaoConverter.addEventListener('click', () => {
    const filmeTitle = document.getElementById('nome-filme').value;
    const duracaoFilme = parseFloat(document.getElementById('duracao-filme').value);
    const respostaName = document.getElementById('respostaNomeDoFilme');
    const respostaDuracao = document.getElementById('respostaDuracaoDoFilme');
    let transformandoEmHoras;
    let transformandoEmMinutos;
    transformandoEmHoras = Math.floor(duracaoFilme/60);
    transformandoEmMinutos = duracaoFilme % 60;

    console.log(transformandoEmMinutos);


    
    respostaName.innerHTML = filmeTitle;
    respostaDuracao.innerHTML = `${transformandoEmHoras} Hora(s) e ${transformandoEmMinutos} minuto(s)`;
})

