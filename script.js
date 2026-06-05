<<<<<<< HEAD
const video = document.getElementById("myVideo");

video.addEventListener("mouseenter", function() {
  video.play();
});

video.addEventListener("mouseleave", function() {
  video.pause();
=======
const video = document.getElementById("myVideo");

video.addEventListener("mouseenter", () => {
  video.play();
});

video.addEventListener("mouseleave", () => {
  video.pause();
>>>>>>> a1b87a1f22bb4e523a5ecd6638ecb1f977bcc174
});