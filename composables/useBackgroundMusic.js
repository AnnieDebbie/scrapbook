import { ref } from "vue";

const musicStarted = ref(false);
let audio;

export function useBackgroundMusic() {
  function playMusic() {
    if (!audio) {
      audio = new Audio("/audio/bg-music.mp3");
      audio.loop = true;
    }
    audio.play();
    musicStarted.value = true;
  }

  function pauseMusic() {
    if (audio) audio.pause();
    musicStarted.value = false;
  }

  return { playMusic, pauseMusic, musicStarted };
}
