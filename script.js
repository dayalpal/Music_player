let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIncon = document.getElementById("controlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (controlIncon.classList.contains('fa-pause')) {
        song.pause();
        controlIncon.classList.remove("fa-pause");
        controlIncon.classList.add("fa-play");
    }
    else {
        song.play();
        controlIncon.classList.remove("fa-play");
        controlIncon.classList.add("fa-pause");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    controlIncon.classList.remove("fa-play");
    controlIncon.classList.add("fa-pause");
}