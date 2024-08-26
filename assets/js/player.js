const audioPlayer = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const footer = document.getElementById('footer');
const seekBar = document.getElementById('seek-bar');

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
    { title: "Don Toliver - No Idea", path: "assets/music/NoIdea.mp3" },
    { title: "Yeat - If We Being Rëal", path: "assets/music/IfWeBeingReal.mp3" },
    { title: "Internet Money - Lemonade", path: "assets/music/Lemonade.mp3" },
    { title: "Yeat - Cali", path: "assets/music/Cali.mp3" }
];

let currentTrack = 0;
audioPlayer.volume = 0.15;
let isDragging = false;

function shuffleTracks() {
    for (let i = tracks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tracks[i], tracks[j]] = [tracks[j], tracks[i]];
    }
}

function loadTrack(index, animationClass) {
    currentTrack = index;
    audioPlayer.src = tracks[currentTrack].path;
    footer.textContent = `ʚ ${tracks[currentTrack].title} ɞ`;

    // Apply animation
    footer.classList.remove('slide-in-right', 'slide-in-left');
    void footer.offsetWidth;
    footer.classList.add(animationClass);
}

function loadRandomTrack() {
    shuffleTracks();
    loadTrack(0, 'slide-in-right');
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
    loadTrack(nextTrack, 'slide-in-right');
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="icon fa-solid fa-pause"></i>';
}

nextBtn.addEventListener('click', playNextTrack);

prevBtn.addEventListener('click', () => {
    const prevTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(prevTrack, 'slide-in-left');
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="icon fa-solid fa-pause"></i>';
});

function updateSeekBar() {
    if (!isDragging) {
        seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
    }
}

seekBar.addEventListener('input', () => {
    isDragging = true;
    audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
});

seekBar.addEventListener('change', () => {
    isDragging = false;
});

audioPlayer.addEventListener('timeupdate', updateSeekBar);

audioPlayer.addEventListener('ended', playNextTrack);

loadRandomTrack();
