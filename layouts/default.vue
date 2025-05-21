<template>
  <main
    class="min-h-screen bg-[url(/images/background.svg)] h-full bg-cover bg-no-repeat"
  >
    <video controls="" autoplay="" name="media" class="hidden">
      <source src="/audio/bg-music.mp3" type="audio/mpeg" />
    </video>

    <slot />
  </main>
</template>

<script lang="ts" setup></script>
