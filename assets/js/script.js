/**
 * TOGGLE FOR BUTTON NAVBAR
 */
const navbar = document.querySelector(".navbar");
const toggleBtn = document.querySelectorAll("[data-nav-btn]");
const navLinkBtn = document.querySelectorAll(".nav-link");
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");

toggleBtn.forEach((i) => {
  i.addEventListener("click", () => {
    navbar.classList.toggle("active");
    if (navbar.classList.contains("active")) {
      openBtn.style.display = "none";
      closeBtn.style.display = "inline";
    } else {
      openBtn.style.display = "inline";
      closeBtn.style.display = "none";
    }
  });
});

navLinkBtn.forEach((i) => {
  i.addEventListener("click", () => {
    navbar.classList.remove("active");
    openBtn.style.display = "inline";
    closeBtn.style.display = "none";
  });
});

/**
 * PLAYING MUSIC
 */
const playPauseBtn = document.getElementById("playPauseBtn");
const audio = document.getElementById("audio");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    play.style.display = "none";
    pause.style.display = "block";
  } else {
    audio.pause();
    play.style.display = "block";
    pause.style.display = "none";
  }
  isPlaying = !isPlaying;
});
