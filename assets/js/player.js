const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const tracks = [
    'assets/music/AlreadyRich.mp3',
    'assets/music/iflookscouldkill.mp3',
    'assets/music/Succubus.mp3',
    'assets/music/Burn.mp3',
    'assets/music/Feline.mp3',
    'assets/music/VVV.mp3'
];

let currentTrack = 0;
audioPlayer.volume = 0.1;

function shuffleTracks() {
    for (let i = tracks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tracks[i], tracks[j]] = [tracks[j], tracks[i]];
    }
}

function loadRandomTrack() {
    shuffleTracks();
    currentTrack = 0;
    audioPlayer.src = tracks[currentTrack];
}

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="icon fa-solid fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="icon fa-solid fa-play"></i>';
    }
});

function playNextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    audioPlayer.src = tracks[currentTrack];
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="icon fa-solid fa-pause"></i>';
}

nextBtn.addEventListener('click', playNextTrack);

prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    audioPlayer.src = tracks[currentTrack];
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="icon fa-solid fa-pause"></i>';
});

audioPlayer.addEventListener('ended', playNextTrack);

loadRandomTrack();