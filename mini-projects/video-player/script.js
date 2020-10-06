const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function stopVideo() {
	video.currentTime = 0;
	video.pause();
}

function changePlayIcon() {
	if (video.paused) {
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	} else {
		play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	}
}

function toggleVideoScreen() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

video.addEventListener('click', toggleVideoScreen);
video.addEventListener('play', changePlayIcon);
video.addEventListener('pause', changePlayIcon);
video.addEventListener('timeupdate', updateProgress);
// timeupdate event is fired when the time indicated by
// the currentTime attribute has been updated

play.addEventListener('click', toggleVideoScreen);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
