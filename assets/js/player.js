const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const footer = document.getElementById('footer');

const tracks = [
    { title: "Yeat - Already Rich", path: "assets/music/AlreadyRich.mp3" },
    { title: "Destroy Lonely - if looks could kill", path: "assets/music/iflookscouldkill.mp3" },
    { title: "Ken Carson - Succubus", path: "assets/music/Succubus.mp3" },
    { title: "Juice WRLD - Burn", path: "assets/music/Burn.mp3" },
    { title: "Don Toliver - Bandit", path: "assets/music/Bandit.mp3" },
    { title: "Yeat - bigger thën everything", path: "assets/music/BiggerThenEverything.mp3" },
    { title: "Yeat - No Morë Talk", path: "assets/music/NoMoreTalk.mp3" },
    { title: "Juice WRLD - Feline", path: "assets/music/Feline.mp3" },
    { title: "Yeat x Playboi Carti - VVV", path: "assets/music/VVV.mp3" },
    { title: "Rich Amiri - One Call", path: "assets/music/OneCall.mp3" },
    { title: "Yeat - Cali", path: "assets/music/Cali.mp3" }
];

let currentTrack = 0;
audioPlayer.volume = 0.15;

function shuffleTracks() {
    for (let i = tracks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tracks[i], tracks[j]] = [tracks[j], tracks[i]];
    }
}

function loadTrack(index) {
    currentTrack = index;
    audioPlayer.src = tracks[currentTrack].path;
    footer.textContent = tracks[currentTrack].title;
}

function loadRandomTrack() {
    shuffleTracks();
    loadTrack(0);
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
    const nextTrack = (currentTrack + 1) % tracks.length;
    loadTrack(nextTrack);
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="icon fa-solid fa-pause"></i>';
}

nextBtn.addEventListener('click', playNextTrack);

prevBtn.addEventListener('click', () => {
    const prevTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(prevTrack);
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="icon fa-solid fa-pause"></i>';
});

audioPlayer.addEventListener('ended', playNextTrack);

loadRandomTrack();
