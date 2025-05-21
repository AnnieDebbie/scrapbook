<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 bg-[#fdf6ef] flex flex-col items-center justify-center"
  >
    <!-- Envelope -->
    <div
      class="relative w-[300px] h-[180px] bg-[#EFE3D4] shadow-lg rounded-md overflow-hidden"
    >
      <!-- Flap -->
      <div
        :class="[
          'absolute w-full h-1/2 top-0 bg-[#D7C0AE] transform origin-top transition-transform duration-700',
          opened ? 'rotate-x-[-100deg]' : '',
        ]"
      ></div>

      <!-- Seal Button -->
      <button
        @click="openEnvelope"
        class="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-max rounded-full text-white z-10 hover:scale-105 transition"
      >
        <img
          src="/images/stamp.svg"
          alt="Seal"
          class="w-full h-full object-cover"
        />
      </button>
    </div>

    <div class="mt-4 text-center font-caveat">
      <h2 class="text-2xl text-[#5E4630]">Welcome, my love 💌</h2>
      <p class="text-[#7A5C3C]">Ready to flip through our memories?</p>
      <p class="mt-6 text-center text-[#5E4630] text-xl animate-pulse">
        Click on the seal to start
      </p>
    </div>

    <!-- <audio ref="musicRef" src="/audio/bg-music.mp3" muted preload="auto" loop /> -->

    <!-- <audio id="bg-music" src="/audio/bg-music.mp3" preload="auto" loop></audio> -->
    <!-- 
    <button
      v-if="musicBlocked"
      @click="playMusicManually"
      class="mt-4 text-[#5E4630]"
    >
      Click here to start the music 🎵
    </button> -->
  </div>
</template>

<script setup>
const show = ref(true);
const opened = ref(false);
const emit = defineEmits(["done"]);

function openEnvelope() {
  opened.value = true;

  setTimeout(() => {
    show.value = false;
    emit("done");
  }, 900);
}
</script>
