<template>
  <div :class="`${containerClass} relative w-max h-auto`">
    <div
      :class="`${polaroidClass} relative bg-white shadow-xl p-4 transform origin-top w-max h-max animate-polaroid-entry`"
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
      :class="tapeClass"
      class="absolute -top-4 left-1/2 -translate-x-1/2 w-[70px] h-[20px] bg-[#E5D1A9] rounded-sm shadow-md rotate-[-40deg] z-20 opacity-0 animate-transparent-fade-in animate-tape-drop"
      :style="{ animationDelay: tapeDelay }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  caption: String,
  imgClass: String,
  containerClass: String,
  polaroidClass: String,
  captionClass: String,
  tapeClass: String,
  baseDelay: {
    type: Number,
    default: 0,
  },
});
const tapeDelay = `${props.baseDelay + 400}ms`;
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
