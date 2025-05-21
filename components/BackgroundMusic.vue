<template>
  <audio ref="audio" :src="src" loop></audio>
</template>

<script setup>
import { onMounted, ref } from "vue";

const src = "/bg-music-free-use.mp3";
const audio = ref(null);

onMounted(() => {
  const playAudio = () => {
    audio.value?.play().catch(() => {
      // Some browsers block autoplay — silent fail
    });
    window.removeEventListener("click", playAudio);
    window.removeEventListener("touchstart", playAudio);
  };

  // Wait for user interaction to autoplay
  window.addEventListener("click", playAudio);
  window.addEventListener("touchstart", playAudio);
});
</script>
