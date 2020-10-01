const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
// Screen Capture API: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
// HTMLMediaElement.srcObject: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		// The loadedmetadata event occurs when meta data for the specified audio/video has been loaded.
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		// Catch error here
		console.log('whoops, error found:', error);
	}
}

buttonElement.addEventListener('click', async () => {
	// Disable Button
	buttonElement.disabled = true;
	// Start Picture in Picture
	await videoElement.requestPictureInPicture();
	// Reset Button
	buttonElement.disabled = false;
});

selectMediaStream();
