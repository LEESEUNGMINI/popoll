// video.js

var video = document.getElementById("header_video");
var progressBar = document.getElementById("progress-bar");
var playPauseButton = document.getElementById("play-pause-button");

function toggleVideo() {
  if (video.paused) {
    video.play();
    playPauseButton.classList.remove("fa-play");
    playPauseButton.classList.add("fa-pause");
  } else {
    video.pause();
    playPauseButton.classList.remove("fa-pause");
    playPauseButton.classList.add("fa-play");
  }
}

video.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  var progress = (video.currentTime / video.duration) * 100;
  progressBar.style.width = progress + "%";
}

// 다른 이벤트 핸들링 등을 추가하고 싶다면 이 부분에 추가하세요.
