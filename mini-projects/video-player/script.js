const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// When video is stopped
function stopVideo() {
	video.currentTime = 0;
	video.pause();
}

// Change Icon to Play/Pause
function updatePlayIcon() {
	if (video.paused) {
		play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	} else {
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	}
}

// Toggle Video Play/Pause
function toggleVideostatus() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

// Event listeners
video.addEventListener('click', toggleVideostatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
// video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideostatus);
stop.addEventListener('click', stopVideo);
