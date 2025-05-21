<template>
  <div>
    <NuxtLayout>
      <Transition
        name="real-page-flip"
        mode="out-in"
        @after-enter="handlePageEnter"
      >
        <NuxtPage></NuxtPage>
      </Transition>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { provide } from "vue";

// Provide a trigger for child components
const pageEntered = ref(false);
provide("pageEntered", pageEntered);

function handlePageEnter() {
  pageEntered.value = true;
}
</script>

<style>
.real-page-flip-enter-active,
.real-page-flip-leave-active {
  transition: transform 0.9s cubic-bezier(0.77, 0, 0.175, 1),
    box-shadow 0.9s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.5s;
  transform-style: preserve-3d;
  will-change: transform, box-shadow, opacity;
}
.real-page-flip-enter-from {
  transform: rotateY(-90deg);
  transform-origin: left center;
  opacity: 0.7;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.15);
}
.real-page-flip-enter-to {
  transform: rotateY(0deg);
  transform-origin: left center;
  opacity: 1;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
.real-page-flip-leave-from {
  transform: rotateY(0deg);
  transform-origin: right center;
  opacity: 1;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
.real-page-flip-leave-to {
  transform: rotateY(90deg);
  transform-origin: right center;
  opacity: 0.7;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.15);
}
.nuxt-layout,
.nuxt-layout > * {
  perspective: 1600px !important;
}
</style>
