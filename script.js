let musicas = [
{titulo: 'Florida', artista: 'Dominic Fike', src: 'Music/Dominic Fike - Florida.mp3', img: 'assets/dominic-fike.jpg'},
{titulo: 'Loose Screws', artista: 'YSB Tril - (ft. YungLiv)', src:'Music/YSB Tril - Loose Screws (ft. YungLiv).mp3', img: 'assets/ysb-tril.jpg'},
{titulo: 'So High', artista: 'Doja Cat', src:'Music/Doja Cat - So High.mp3', img:'assets/doja-cat.jpg'},
  {titulo:'SORRY NOT SORRY', artista:'Tyler the creator', src:'Music/SORRY NOT SORRY.mp3', img:'assets/tyler-the-creator.jpg'},
{titulo:'Stuck', artista:'Yvng Ev', src:'Music/Yvng Ev - Stuck (Visualizer).mp3', img:'assets/yvng-ev.png'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.profile h2');
let nomeArtista = document.querySelector('.profile i');

renderizarMusica(indexMusica);

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
     indexMusica--;
     renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src)
  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[index].titulo
    nomeArtista.textContent = musicas[index].artista
    imagem.src = musicas[index].img
    duracaoMusica.textContent = segundosMinutos(Math.floor(musica.duration))
  })
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica(){
    musica.pause();
    document.querySelector(".botao-pause").style.display = "none"
    document.querySelector(".botao-play").style.display = "block"
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosMinutos(Math.floor(musica.currentTime));
}

function segundosMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegudos = segundos % 60;
    if (campoSegudos < 10){
        campoSegudos = '0' + campoSegudos;
    }
    return campoMinutos+ ':' +campoSegudos;
}




