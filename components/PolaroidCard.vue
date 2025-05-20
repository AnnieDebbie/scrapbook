<template>
  <div class="relative w-max h-auto">
    <!-- Tape -->

    <div
      :class="`${containerClass} relative bg-white shadow-xl p-4 transform origin-top  w-max h-max animate-polaroid-entry `"
    >
      <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
        <img :src="image" alt="photo" :class="imgClass" class="object-cover" />
      </div>
      <p
        :class="captionClass"
        class="text-center mt-2 text-sm font-medium text-gray-700 italic"
      >
        {{ caption }}
      </p>
    </div>

    <div
      class="absolute -top-4 left-1/2 -translate-x-1/2 w-[70px] h-[20px] bg-[#E5D1A9] opacity-70 rounded-sm shadow-md rotate-[-40deg] z-20 animate-tape-drop"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  caption: String,
  imgClass: String,
  containerClass: String,
  captionClass: String,
  baseDelay: String,
});
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
