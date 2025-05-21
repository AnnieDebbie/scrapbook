<template>
  <section
    class="min-h-screen pb-12 pt-20 overflow-hidden opacity-0 animate-fade-in delay-200ms flex gap-10"
  >
    <div class="flex flex-col items-center gap-2 pl-5">
      <span
        class="block bg-black px-2 py-1 rounded shadow-lg rotate-[-6deg] opacity-0 animate-fade-in delay-[200ms] relative"
      >
        <span
          class="text-6xl md:text-[150px] font-extrabold text-white tracking-wider"
          style="font-family: 'Arial Black', Impact, sans-serif"
        >
          N
        </span>
        <span
          class="absolute inset-0 w-full h-full bg-blue-400 opacity-40 rounded pointer-events-none"
        ></span>
      </span>
      <span
        class="block bg-blue-400 px-2 py-1 rounded shadow-lg rotate-[7deg] opacity-0 animate-fade-in delay-[500ms]"
      >
        <span
          class="text-6xl md:text-[132px] font-extrabold text-pink-400 tracking-wider"
          style="font-family: 'Arial Black', Impact, sans-serif"
        >
          K
        </span>
      </span>
      <span
        class="block bg-black px-2 py-1 rounded shadow-lg rotate-[-4deg] opacity-0 animate-fade-in delay-[800ms]"
      >
        <span
          class="text-6xl md:text-9xl font-extrabold text-red-500 tracking-wider"
          style="font-family: 'Arial Black', Impact, sans-serif"
        >
          E
        </span>
      </span>
      <span
        class="block bg-teal-300 px-2 py-1 rounded shadow-lg rotate-[5deg] opacity-0 animate-fade-in delay-[1100ms]"
      >
        <span
          class="text-6xl md:text-8xl font-extrabold text-yellow-400 tracking-wider"
          style="font-family: 'Arial Black', Impact, sans-serif"
        >
          M
        </span>
      </span>
    </div>

    <article
      class="font-sister opacity-0 animate-fade-in delay-[1800ms] max-w-[729px]"
    >
      <p class="font-sister text-[#CA112C] text-[36.189px] font-[normal]">
        {{ displayedText }}
      </p>

      <div
        v-if="typingDone"
        class="text-black text-2xl font-normal leading-[48px]"
      >
        <p class="opacity-0 animate-fade-in delay-[2800ms]">
          From the first time we had a deep conversation, I knew we had
          something special.
        </p>

        <p class="opacity-0 animate-fade-in delay-[3800ms]">
          Looking back, I'm so grateful for every adventure, every laugh, every
          challenge, and every quiet moment we've shared.
        </p>
        <p class="opacity-0 animate-fade-in delay-[4800ms]">
          I can't wait for the endless tomorrows, the memories we'll make, and
          the love we'll continue to build.
        </p>

        <p class="opacity-0 animate-fade-in delay-[6000ms]">
          Here's to us – to loving harder, laughing louder, and growing stronger
          together.
        </p>

        <p class="opacity-0 animate-fade-in delay-[7700ms]">
          Happy Birthday, My Love.
        </p>
      </div>

      <p
        v-if="typingDone"
        class="opacity-0 animate-float-up delay-[8000ms] font-sister text-[#CA112C] text-[36.189px] font-normal mt-4 flex items-center"
      >
        <span>
          Forever Yours, <br />
          Francisca
        </span>

        <img src="/images/kiss.svg" class="animate-kiss-peck" alt="kiss" />
      </p>
    </article>

    <div
      v-if="typingDone"
      class="grid grid-cols-2 text-[#2F2E2E] font-caveat text-xl font-bold leading-[22.882px] text-shadow-[0px_4.192px_10.481px_rgba(0,0,0,0.12)]"
    >
      <div class="opacity-0 animate-drop-in delay-[2800ms]">
        <PolaroidCard
          @click="flipped = true"
          image="/images/notes-img-1.jpeg"
          imgClass="max-w-[372.174px] h-[248.146px] "
          containerClass="cursor-pointer delay-[2800ms] z-40 mt-20"
          polaroidClass="rotate-[-10deg]"
          captionClass=" "
          :baseDelay="2800"
        />
      </div>

      <div class="opacity-0 animate-drop-in delay-[3800ms]">
        <PolaroidCard
          @click="flipped = true"
          image="/images/notes-img-2.jpeg"
          imgClass="max-w-[200.174px] h-[248.146px]"
          containerClass="cursor-pointer delay-[3800ms] z-20"
          polaroidClass="rotate-[5deg] "
          captionClass=""
          :baseDelay="3800"
        />
      </div>

      <div class="opacity-0 animate-fade-in delay-[6000ms]">
        <PolaroidCard
          @click="flipped = true"
          image="/images/notes-img-3.jpeg"
          imgClass="max-w-[372.174px] h-[248.146px] "
          containerClass="cursor-pointer delay-[6000ms] z-40 mt-20"
          polaroidClass="rotate-[12deg]"
          captionClass=" "
          :baseDelay="6000"
        />
      </div>

      <div class="opacity-0 animate-fade-in delay-[7100ms]">
        <PolaroidCard
          @click="flipped = true"
          image="/images/notes-img-4.jpeg"
          imgClass="max-w-[200.174px] h-[248.146px]"
          containerClass="cursor-pointer delay-[7100ms] z-20"
          polaroidClass="rotate-[-5deg] -ml-7"
          captionClass=""
          :baseDelay="7100"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, onMounted } from "vue";

const pageEntered = inject("pageEntered");

const fullText = `Here's to US, yesterday, today and tomorrow...`;
const displayedText = ref("");
const showCursor = ref(true);
const typingDone = ref(false);

onMounted(() => {
  setTimeout(() => {
    let i = 0;
    const interval = setInterval(() => {
      displayedText.value += fullText[i];
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        typingDone.value = true;
      }
    }, 40);
    setInterval(() => (showCursor.value = !showCursor.value), 500);
  }, 1800);
});
</script>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
}
.note-entry .note {
  opacity: 0;
  animation: slideIn 0.8s ease 1s forwards;
}
.fade-polaroid {
  opacity: 0;
  transform: scale(0.8) rotate(-2deg);
  animation: polaroidEntry 0.6s ease-out forwards;
}
.delay-0 {
  animation-delay: 2s;
}
.delay-1 {
  animation-delay: 2.3s;
}
.delay-2 {
  animation-delay: 2.6s;
}

/* Keyframes */
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes polaroidEntry {
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
</style>
