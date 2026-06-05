const video = document.getElementById("myVideo");

video.addEventListener("mouseenter", function() {
  video.play();
});

video.addEventListener("mouseleave", function() {
  video.pause();
});