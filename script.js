const img_gift =  document.getElementsByClassName('img_gift');
const input_gift = document.getElementById('input_gift');
const phrase_gift = document.getElementById('phrase_gift');

const imgs = ['https://i.im.ge/2023/09/20/6n1NiD.24697b5c-7d98-40ef-9ed7-064d66ce23cd.jpg',
                'https://i.im.ge/2023/09/20/6n1A7q.397c5920-bab6-45dd-ad18-bfef9589e92d.jpg',
                'https://i.im.ge/2023/09/20/6n1EpP.67dd5be7-07a1-4cd6-879d-294585892afe.jpg',
                'https://i.im.ge/2023/09/20/6n1K7c.2deb9aca-3e8a-415f-b877-4569cde981c4.jpg',
                'https://i.im.ge/2023/09/20/6n1z2x.f0d0a7bf-033c-4d61-b5cb-a355ce5ef2a8.jpg',
                'https://i.im.ge/2023/09/20/6n1pKJ.363f2684-5ba4-417d-930b-2d26cf99e596.jpg',
                'https://i.im.ge/2023/09/20/6n2urM.2885a835-50d1-48f5-a743-0caad8503c07.jpg',
                'https://i.im.ge/2023/09/20/6nSIqK.d727599d-ca1d-4c24-8a4e-9c63a8a9789d.jpg',
                'https://i.im.ge/2023/09/20/6ndh7T.3db9a01c-4aa8-43ba-b14f-57081059fffc.jpg',
                'https://i.im.ge/2023/09/20/6naEvT.348a0b0d-f2c8-4ee0-949a-e2694a710c40.jpg',
                'https://i.im.ge/2023/09/20/6nabKG.7db736a2-b0d8-4511-bcdb-8c8fb222ea6b.jpg',
                'https://i.im.ge/2023/09/20/6naglx.9814fd5a-641d-4263-9568-d9a51e4424bb.jpg',
                'https://i.im.ge/2023/09/20/6naWey.bbe7d131-b22b-4117-8d36-2427b7d22be6.jpg',
                'https://i.im.ge/2023/09/20/6naKDS.c3b09a7a-fa9c-44d3-aea5-cefe737c2aaf.jpg',
                'https://i.im.ge/2023/09/20/6naVCz.1e3b5494-f2c3-4461-9764-d44be4b663ff.jpg']
const phrases = ['Gosto de você', 'Gosto muito de você', 'Apaixonei', 'Meu amor', 'Te amo']

input_gift.addEventListener('click', function()
{
    if(input_gift.value < 20)
    {
        phrase_gift.innerText = phrases[0]
        img_gift[0].src = imgs[0]
        img_gift[1].src = imgs[1]
        img_gift[2].src = imgs[2]
    }
    else if(input_gift.value < 40)
    {
        phrase_gift.innerText = phrases[1]
        img_gift[0].src = imgs[3]
        img_gift[1].src = imgs[4]
        img_gift[2].src = imgs[5]
    }
    else if(input_gift.value < 60)
    {
        phrase_gift.innerText = phrases[2]
        img_gift[0].src = imgs[6]
        img_gift[1].src = imgs[7]
        img_gift[2].src = imgs[8]
    }
    else if(input_gift.value < 80)
    {
        phrase_gift.innerText = phrases[3]
        img_gift[0].src = imgs[9]
        img_gift[1].src = imgs[10]
        img_gift[2].src = imgs[11]
    }
    else if(input_gift.value <= 100)
    {
        phrase_gift.innerText = phrases[4]
        img_gift[0].src = imgs[12]
        img_gift[1].src = imgs[13]
        img_gift[2].src = imgs[14]
    }
    else
    {
        alert("Escolhe ai, leza")
    }
})



const discSong = document.getElementById('play');
const songName = document.getElementById('song_name');
const bandName = document.getElementById('band_name')
const song = document.getElementById('audio');
const currentProgress = document.getElementById('current-progress');
const play = document.getElementById('play');
const next = document.getElementById('next');
const back = document.getElementById('back');
const no_sense = document.getElementById('no_sense');
const comeBack = document.getElementById('comeBack');
const banner = document.getElementById('banner_img');
let music = ['https://conradoec.github.io/Teste_nao_importante/musicas/WhatsApp%20Audio%202023-09-19%20at%2022.45.26.mpeg', 'https://conradoec.github.io/Teste_nao_importante/musicas/WhatsApp%20Audio%202023-09-19%20at%2023.05.09.mpeg', 'https://github.com/ConradoEC/Teste_nao_importante/blob/main/musicas/WhatsApp%20Audio%202023-09-19%20at%2023.06.33.mpeg', 'https://github.com/ConradoEC/Teste_nao_importante/blob/main/musicas/WhatsApp%20Audio%202023-09-19%20at%2023.11.41.mpeg', 'https://github.com/ConradoEC/Teste_nao_importante/blob/main/musicas/WhatsApp%20Audio%202023-09-19%20at%2023.12.31.mpeg', 'https://github.com/ConradoEC/Teste_nao_importante/blob/main/musicas/WhatsApp%20Audio%202023-09-19%20at%2023.13.16.mpeg', 'https://github.com/ConradoEC/Teste_nao_importante/blob/main/musicas/WhatsApp%20Audio%202023-09-19%20at%2023.14.01.mpeg']
let image = ['https://th.bing.com/th/id/OIP.ZLSmhmrWFMnACTz6rUepNgHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            'https://th.bing.com/th/id/OIP.CecYlcUnpig3ldYx39ADJAHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
            'data:image/jpeg;base64,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', 
            'https://th.bing.com/th/id/OIP.olP9VmpRDw9syFXk1mRMOAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
            'https://th.bing.com/th/id/OIP.WWQqBtc-XRxEbiUc5whnPQHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            'https://th.bing.com/th/id/OIP.OrlvYSAGvXCmVfnEWBWSEQHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            'https://th.bing.com/th/id/OIP.e2GA6SZPLK4UhldtlaffRwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7']
let realSongName = ['Oh Meu Deus', 'Imprevisto', 'Numa Sala de Reboco', 'Você Me Vira a Cabeça', 'Meio a Meio II', 'Meu Tudo e Nada', 'My Kind of Woman']
let singer = ['Projota', 'Yago Oproprio', 'Luiz Gonzaga', 'Alcione', 'Thegust Mcs', 'Gabriel Coelho', 'Mac DeMarco']
let isPlaying = false;
let allSongs = 0;





function chooseItems()
{
    banner.src = image[allSongs];
    songName.innerText = realSongName[allSongs];
    bandName.innerText = singer[allSongs];
    song.src = music[allSongs];
}

function playSong()
{
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    isPlaying = true;
    song.play()
}

function pauseSong()
{
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    isPlaying = false;
    song.pause()
}

function nextSong()
{
    if(allSongs === music.length -1)
    {
        allSongs = 0;
    }
    else
    {
        allSongs++
    }
    chooseItems()
    playSong()
}

function backSong()
{   
    if(allSongs === 0)
    {
        allSongs = music.length -1;
    }
    else
    {
        allSongs--
    }
    chooseItems()
    playSong()
}

function no_senseSong(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function comeBackSong()
{
    chooseItems()
    playSong()
    console.log(allSongs)
}

function UpdateProgressBar()
{
    const barWidth = (song.currentTime/song.duration)*100
    currentProgress.style.setProperty('--progress', `${barWidth}%`)

    if(barWidth == 100)
    {
        nextSong()
    }
}



song.addEventListener('timeupdate', UpdateProgressBar)

play.addEventListener('click', function()
{   if( isPlaying === false)
    {
        playSong()
    }
    else
    {
        pauseSong()
    }
})

next.addEventListener('click', function()
{
    nextSong()
})

back.addEventListener('click', function()
{
    backSong()
})

comeBack.addEventListener('click', function()
{
    comeBackSong();
})

no_sense.addEventListener('click', function()
{
    let value = no_senseSong(0, 4);
    song.src = music[value]
    banner.src = image[value]
    songName.innerText = realSongName[value]
    bandName.innerText = singer[value]
    console.log(value)
    playSong()
})
