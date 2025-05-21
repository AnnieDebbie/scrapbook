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
.page-flip-enter-active,
.page-flip-leave-active {
  transition: transform 1s ease;
  transform-style: preserve-3d;
}
.page-flip-enter-from {
  transform: rotateY(-180deg);
}
.page-flip-enter-to {
  transform: rotateY(0deg);
}
.page-flip-leave-from {
  transform: rotateY(0deg);
}
.page-flip-leave-to {
  transform: rotateY(180deg);
}
</style>
