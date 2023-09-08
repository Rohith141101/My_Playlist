// script.js
const audioPlayer = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause-button");
const seekBar = document.getElementById("seek-bar");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");


let isPlaying = false;

playPauseButton.addEventListener("click", togglePlayPause);

function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

audioPlayer.addEventListener("timeupdate", updateSeekBar);

function updateSeekBar() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progress = (currentTime / duration) * 100;
    seekBar.value = progress;
}

seekBar.addEventListener("input", seek);

function seek() {
    const seekTime = (seekBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
}
// ... previous code ...
audioPlayer.addEventListener("ended", playNextSong);

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadAndPlaySong();
}

function playPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadAndPlaySong();
}

// Attach event listeners for next and previous buttons
nextButton.addEventListener("click", playNextSong);
prevButton.addEventListener("click", playPreviousSong);


const playlist = [
    {
        src: "./songs/Neethanae-Neethane-MassTamilan.com.mp3",
        title: "Neethanae",
        artist: "A. R. Rahman,Shreya Ghoshal",
        image:"https://c.saavncdn.com/148/Neethanae-From-Mersal--Tamil-2017-20170817112839-500x500.jpg"
    },
    {
        src: "./songs/So Baby.mp3",
        title: "So Baby",
        artist: "Anirudh Ravichander, Ananthakrrishnan",
        image:"https://c.saavncdn.com/649/So-Baby-From-Doctor--Tamil-2021-20210225151221-500x500.jpg"
    },
    {
        src: "./songs/Aga-Naga-MassTamilan.dev.mp3",
        title: "Aga Naga",
        artist: "A. R. Rahman, Shakthisree Gopalan",
        image:"https://pbs.twimg.com/media/Frqg00QaMAMewuj?format=jpg&name=4096x4096"
    },
    {
        src: "./songs/Vaa Vaathi.mp3",
        title: "Vaa Vaathi",
        artist: "Dhanush, G. V. Prakash Kumar, Shweta Mohan",
        image:"https://naasongsmix.com/wp-content/uploads/2022/12/Vaa-Vathi.jpg"
    },
    {
        src: "./songs/Kanja Poovu Kannala.mp3",
        title: "Kanja Poovu Kannala",
        artist: "Yuvan Shankar Raja, Sid Sriram",
        image:"https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/58/b9/a1/58b9a149-f11e-f4cc-0afd-8f8484f0c4a3/196589157669.jpg/600x600bf-60.jpg"
    },
    {
        src: "./songs/Megham Karukatha.mp3",
        title: "Megham Karukatha",
        artist: "Dhanush, Anirudh Ravichander",
        image:"https://static.qobuz.com/images/covers/pa/75/f7k1lii0175pa_600.jpg"
    },
];

let currentSongIndex = 0;

// Load and play the first song when the page loads
loadAndPlaySong();

function loadAndPlaySong() {
    const song = playlist[currentSongIndex];
    audioPlayer.src = song.src;
    document.querySelector(".song-info h1").textContent = song.title;
    document.querySelector(".song-info p").textContent = song.artist;
    document.querySelector("#image").src = song.image;
    audioPlayer.play();
    isPlaying = true;
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    
}
window.addEventListener('DOMContentLoaded',loadAndPlaySong)