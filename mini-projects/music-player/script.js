const container = document.querySelector('.container');
const progressBox = document.getElementById('box-progress');
const progress = document.getElementById('progress');
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');

const songList = ['hey', 'summer', 'ukulele'];
let songIndex = 1;

let song = songList[songIndex];

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function loadSong(song) {
    title.innerText = capitalize(song);
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function play() {

    const playIcon = playBtn.querySelector('i.fa');

    container.classList.add('play');
    playIcon.classList.add('fa-pause');
    playIcon.classList.remove('fa-play');
    audio.play();

}

function pause() {

    const playIcon = playBtn.querySelector('i.fa');

    container.classList.remove('play');
    playIcon.classList.add('fa-play');
    playIcon.classList.remove('fa-pause');
    audio.pause();
}

function playSong() {

    const isPlaying = container.classList.contains('play');
    
    isPlaying ? pause() : play();
}

function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }

    loadSong(songList[songIndex]);
    play();
    
}

function nextSong() {
    songIndex++;
    if(songIndex > songList.length-1) {
        songIndex = 0;
    }
    loadSong(songList[songIndex]);
    play();
}

function shuffleSong() {
    const randomIndex = Math.floor(Math.random() * songList.length);
    
    loadSong(songList[randomIndex]);
    play();
}

function showProgress() {
    let percProgress = audio.currentTime / audio.duration * 100;
    progress.style.width = `${percProgress}%`;
}

function selectProgress(e) {
    const progressTotal = this.clientWidth;
    const pointClicked = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (pointClicked / progressTotal) * duration;
}

playBtn.addEventListener('click', playSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
shuffleBtn.addEventListener('click', shuffleSong);
audio.addEventListener('timeupdate', showProgress);
audio.addEventListener('ended', nextSong);
progressBox.addEventListener('click', selectProgress);