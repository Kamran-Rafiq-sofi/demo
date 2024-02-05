var video = document.getElementById("myVideo");

// Check if the video is muted initially
var isMuted = video.muted;

// Toggle mute/unmute when the video is clicked
video.onclick = function() {
    isMuted = !isMuted;
    video.muted = isMuted;
};