const anoAtual = document.querySelector('.ano-atual');

let data = new Date();
let anoData = data.getFullYear();
anoAtual.textContent = anoData;

const contador = document.querySelectorAll('.counter-line-format h4');

const dataFutura = new Date(anoData, 11, 31, 23, 59, 0);

let tempoFuturo = dataFutura.getTime();

const pegarTempoRestante = () => {
    let hoje = new Date().getTime();
    let tempoRestante = tempoFuturo - hoje;

    // 1s = 1000ms
    // 1min = 60s
    // 1hr = 60min
    // 1d = 24hrs

    const umDia = 24*60*60*1000;
    const umaHora = 60*60*1000;
    const umMinuto = 60*1000;

    let dias = Math.floor(tempoRestante / umDia);
    let horas = Math.floor((tempoRestante % umDia) / umaHora);
    let minutos = Math.floor((tempoRestante % umaHora) / umMinuto);
    let segundos = Math.floor((tempoRestante % umMinuto) / 1000);

    const tempo = [dias, horas, minutos, segundos];

    const formato = (item) => {
        if(item < 10){
            return item = `0${item}`;
        }
        else{
            return item;
        }
    }

    contador.forEach(function(item, index){
        item.innerHTML = formato(tempo[index]);
    });
}

let contagemRegressiva = setInterval(pegarTempoRestante, 1000);
pegarTempoRestante();