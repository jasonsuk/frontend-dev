const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function updateProgress() {
	// console.log(video.currentTime, video.duration);
	progress.value = video.currentTime / video.duration * 100;

	// Get minutes
	let mins = Math.floor(video.currentTime / 60);
	if (mins < 10) {
		mins = '0' + String(mins);
	}

	// Get seconds
	let secs = Math.floor(video.currentTime % 60);
	if (secs < 10) {
		secs = '0' + String(secs);
	}

	timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
	video.currentTime = +progress.value / 100 * video.duration;
	// progress.value set 0 - 100
}

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
video.addEventListener('timeupdate', updateProgress);
// timeupdate event is fired when the time indicated by
// the currentTime attribute has been updated

play.addEventListener('click', toggleVideostatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
