<template>
  <div>
    <NuxtLayout>
      <Transition name="page-flip" mode="out-in" @after-enter="handlePageEnter">
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
.page-flip {
  perspective: 1200px;
  min-height: 100vh;
}
.page-flip-enter-active,
.page-flip-leave-active {
  transition: transform 0.7s cubic-bezier(0.4, 2, 0.6, 1);
  transform-style: preserve-3d;
}
.page-flip-enter-from {
  transform: rotateY(-180deg);
  opacity: 0;
}
.page-flip-enter-to {
  transform: rotateY(0deg);
  opacity: 1;
}
.page-flip-leave-from {
  transform: rotateY(0deg);
  opacity: 1;
}
.page-flip-leave-to {
  transform: rotateY(180deg);
  opacity: 0;
}
</style>
