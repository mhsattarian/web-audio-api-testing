const audioElement = document.querySelector("#input-audio");

const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

const track = audioContext.createMediaElementSource(audioElement);

const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  function() {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === "false") {
      audioElement.play();
      this.dataset.playing = "true";
    } else if (this.dataset.playing === "true") {
      audioElement.pause();
      this.dataset.playing = "false";
    }
  },
  false
);
