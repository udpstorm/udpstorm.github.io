
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');
const timeDisplay = document.getElementById('time-display');
const totalTimeDisplay = document.getElementById('total-time-display');
const progressBar = document.getElementById('progress-bar');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = "<i class='bx bx-pause-circle' ></i>";
    } else {
        audio.pause();
        playPauseButton.innerHTML = "<i class='bx bx-play-circle'></i>";
    }
});

audio.addEventListener('timeupdate', () => {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const duration = Math.floor(audio.duration);
    progressBar.max = duration;
    progressBar.value = audio.currentTime;

    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);
    totalTimeDisplay.textContent = `${String(totalMinutes).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`;
});

progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

audio.addEventListener('loadedmetadata', () => {
    const totalMinutes = Math.floor(audio.duration / 60);
    const totalSeconds = Math.floor(audio.duration % 60);
    totalTimeDisplay.textContent = `${String(totalMinutes).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`;
});