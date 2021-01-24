const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');
const fullscreen = document.getElementById('fullscreen');

// Fullscreen
function openFullScreen() {
    if(video.requestFullscreen) {
        video.requestFullscreen();
    } else if (fullscreen.requestFullscreen) {
        video.requestFullscreen;
    }
}

// Play video
function playVideo() {
    if(video.paused) {
        video.play()
    }
}

// Pause video
function pauseVideo() {
    if(video.played) {
        video.pause();
    }
}

// Play & Pause video
function playPauseVideo() {
    if(video.paused) {
        video.play();
      } else {
        video.pause();
      }
}

// Stop video
function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

// Update Progress & Time
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10) {
        mins = '0' + String(mins);
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10) {
        secs = '0' + String(secs);
    }

    timeStamp.innerHTML = `${mins}:${secs}`
}

// Update Progress
function setProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('click', playPauseVideo);
video.addEventListener('dblclick', openFullScreen);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', playVideo);
pause.addEventListener('click', pauseVideo);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setProgress);

fullscreen.addEventListener('click', openFullScreen);