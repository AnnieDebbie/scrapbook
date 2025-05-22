<template>
  <section class="scrapbook-wrapper overflow-hidden">
    <div class="absolute top-0 -right-[100px]">
      <img src="/images/clipped-newspaper.png" class="w-[500px] z-10" />
      <img
        src="/images/leaves.png"
        class="max-w-[300px] z-20 absolute top-4 right-24 animate-sway delay-[1200ms]"
      />
    </div>
    <div
      v-if="pageEntered"
      class="min-h-screen pb-12 pt-8 overflow-hidden opacity-0 animate-fade-in delay-[700ms]"
    >
      <section class="flex justify-between px-6 relative">
        <div class="opacity-0 animate-fade-in delay-[1100ms]">
          <p
            class="font-caveat text-[34.075px] font-bold leading-[38.164px] text-[#464646] text-shadow-[0px_5.73px_14.324px_rgba(0,0,0,0.12)] rotate-[-1deg]"
          >
            You make me laugh, even on my worst days
          </p>
        </div>

        <div
          class="pt-8 pb-10 bg-[url('/images/torn-paper.png')] bg-no-repeat bg-contain z-10 font-caveat w-full max-w-[650px] absolute -top-8 right-[15%] opacity-0 animate-fade-in delay-[2300ms]"
        >
          <p
            class="text-3xl underline leading-snug w-[57%] mx-auto text-[#545454] font-normal"
          >
            two hearts that <br />
            beat as one
          </p>
        </div>
      </section>

      <section
        class="flex text-[#2F2E2E] px-5 font-caveat text-xl font-bold leading-[22.882px] text-shadow-[0px_4.192px_10.481px_rgba(0,0,0,0.12)]"
      >
        <div class="grid grid-cols-2 md:flex gap-32 mt-14">
          <PolaroidCard
            image="/images/memories-img-one.jpeg"
            imgClass="max-w-[372.174px] h-[248.146px] "
            containerClass="cursor-pointer delay-[1300ms] z-40 "
            polaroidClass="rotate-[-10deg]"
            captionClass=" "
            :baseDelay="1300"
          />
          <PolaroidCard
            image="/images/memories-img-two.jpeg"
            imgClass="max-w-[372.174px] h-[248.146px] "
            containerClass="cursor-pointer delay-[1300ms] z-40 "
            polaroidClass="rotate-[12deg]"
            captionClass=" "
            :baseDelay="1300"
          />
        </div>

        <div class="font-caveat mt-32 ml-10">
          <img
            src="/images/memories-img-3.jpeg"
            class="min-w-[354px] opacity-0 animate-polaroid-entry delay-[2800ms] rotate-[-2deg]"
          />
        </div>

        <div
          class="flex font-caveat mt-40 items-end gap-6 ml-10 opacity-0 animate-fade-in delay-[3600ms]"
        >
          <PolaroidCard
            @click="flipped = true"
            image="/images/memories-img-four.jpeg"
            imgClass="max-w-[200.174px] h-[248.146px]"
            containerClass="cursor-pointer delay-[3500ms] z-20 "
            polaroidClass=""
            captionClass=""
            :baseDelay="3500"
          />

          <p
            class="text-[29.99px] font-normal leading-[112%] w-[250px] max-w-[400px] pb-4 opacity-0 animate-drop-in delay-[3800ms]"
          >
            You make me feel seen, loved and
            <span class="text-[#9F5A5A]">valued </span>
          </p>
        </div>
      </section>

      <div
        class="pl-48 pr-10 grid grid-cols-2 md:flex mt-5 text-[#2F2E2E] font-caveat text-xl font-bold leading-[22.882px] text-shadow-[0px_4.192px_10.481px_rgba(0,0,0,0.12)] opacity-0 animate-fade-in delay-[5300ms]"
      >
        <div class="flex gap-5 items-start rotate-[-5deg]">
          <PolaroidCard
            @click="flipped = true"
            image="/images/memories-img-five.jpeg"
            imgClass="max-w-[200.174px] h-[248.146px]"
            containerClass="cursor-pointer delay-[5800ms] z-20"
            polaroidClass=" "
            captionClass=""
            :baseDelay="5800"
          />

          <p
            class="text-[29.99px] font-normal leading-[112%] text-[#691313] mt-4 w-max max-w-[250px] animate-float-up"
          >
            You love me in a way that feels like a warm hug on a cold day
          </p>
        </div>
        <div class="flex items-center mt-12 gap-5 ml-5 rotate-[-2deg]">
          <PolaroidCard
            @click="flipped = true"
            image="/images/memories-img-six.jpeg"
            imgClass="max-w-[200.174px] h-[248.146px]"
            containerClass="cursor-pointer opacity-0 animate-fade-in delay-[6100ms] z-20"
            polaroidClass=" -ml-7"
            captionClass=""
            :baseDelay="5800"
          />

          <p
            class="text-[29.99px] font-normal leading-[112%] text-black w-max max-w-[200px] opacity-0 animate-float-up delay-[6400ms]"
          >
            Thank you for the small things and making my heart feel at home
          </p>
        </div>
        <div
          class="rotate-[2deg] ml-10 mt-14 opacity-0 animate-polaroid-entry delay-[6600ms] relative"
        >
          <img
            src="/images/memories-img-seven.png"
            class="min-w-[290px] w-[300px]"
          />

          <p class="text-[29.99px] font-normal leading-[112%] text-[#674A4A]">
            I love your calm voice
          </p>

          <div class="absolute -top-16 -right-19 w-[145px]">
            <img src="/images/memories-img-eight.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <div
        class="absolute -top-[270px] w-[313.639px] h-[810.116px] left-[-40px] opacity-0 animate-fade-in delay-[4800ms]"
      >
        <img
          src="/images/flower.png"
          alt=""
          class="opacity-0 animate-bloom delay-[5000ms]"
        />
      </div>

      <div
        class="absolute bottom-8 left-8 cursor-pointer group opacity-0 animate-fade-in delay-[5000ms]"
      >
        <router-link to="/" class="fixed bottom-0 right-0 z-50">
          <div class="relative w-20 h-20">
            <div
              class="absolute bottom-0 right-0 w-20 h-20 bg-[#F5EED8] rounded-tr-3xl shadow-lg group-hover:bg-yellow-300 transition-colors duration-300"
            ></div>
            <span
              class="absolute bottom-2 left-4 font-caveat text-lg text-pink-700 rotate-[10deg] group-hover:underline"
            >
              Previous Page
            </span>
          </div>
        </router-link>
      </div>
      <div
        class="absolute -top-[270px] w-[313.639px] h-[810.116px] left-[-40px] opacity-0 animate-fade-in delay-[5200ms]"
      >
        <router-link to="/notes" class="fixed bottom-0 right-0 z-50">
          <div class="relative w-20 h-20 cursor-pointer group">
            <div
              class="absolute bottom-0 right-0 w-20 h-20 bg-[#F5EED8] rounded-tr-3xl shadow-lg group-hover:bg-yellow-300 transition-colors duration-300"
            ></div>
            <span
              class="absolute bottom-2 right-4 font-caveat text-lg text-pink-700 rotate-[-10deg] group-hover:underline"
            >
              Next Page
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, onMounted } from "vue";

const pageEntered = inject("pageEntered", true);
const images = [
  { id: 1, src: "img1.jpg", caption: "First trip" },
  { id: 2, src: "img2.jpg", caption: "Cuddles!" },
  { id: 3, src: "img3.jpg", caption: "Our song" },
];
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
