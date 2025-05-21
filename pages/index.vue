<template>
  <section
    v-show="!flipped"
    class="min-h-screen py-12 overflow-hidden opacity-0 animate-fade-in delay-200ms perspective"
    :class="flipped ? 'animate-page-flip' : ''"
  >
    <section
      class="flex items-center justify-between container mx-auto opacity-0 animate-fade-in delay-[5000ms]"
    >
      <div class="rotate-[-7deg] mb-6 flex items-center">
        <p
          class="font-akaya text-[#B7B7B7] font-base font-normal leading-[15.2px] max-w-[70px]"
        >
          P.S. Can we meet soon?
        </p>
        <div>
          <img
            src="/images/airplane.svg"
            alt="airplane"
            class="animate-fly-across delay-[5500ms]"
          />
        </div>
      </div>
      <div
        class="relative bg-[#FAD4D4] opacity-60 w-[142.289px] h-[29.91px] rotate-[-13.577deg]"
      >
        <img src="/images/glasses.svg" class="absolute -top-10" />
      </div>
      <div>
        <img src="/images/heart-icon.svg" class="" />
      </div>
    </section>
    <div class="space-y-8">
      <section class="flex items-center w-[50%] mx-auto gap-[71px]">
        <div class="flex gap-2 mb-6 justify-center">
          <span
            class="text-9xl font-bold text-blue-600 bg-[#fce7f3] px-4 py-2 rounded rotate-[-2deg] shadow h-max opacity-0 animate-fade-in delay-[500ms]"
          >
            N
          </span>
          <span
            class="text-9xl font-bold text-orange-600 bg-[#fff7ed] px-4 py-2 rounded rotate-[3deg] shadow h-max opacity-0 animate-fade-in delay-[700ms]"
          >
            K
          </span>
          <span
            class="text-8xl font-bold text-green-600 bg-[#ecfdf5] px-4 py-2 rounded rotate-[-3deg] shadow h-max opacity-0 animate-fade-in delay-[900ms]"
          >
            E
          </span>
          <span
            class="text-7xl font-bold text-pink-600 bg-[#fef3c7] px-4 py-2 rounded rotate-[2deg] shadow h-max opacity-0 animate-fade-in delay-[1100ms]"
          >
            M
          </span>
        </div>

        <div class="text-left">
          <p
            class="text-[#7A0A18] font-akaya text-[30.715px] font-normal leading-[29.179px] max-w-[240px] opacity-0 animate-fade-in delay-[1300ms]"
          >
            Thank you for everything and...
          </p>

          <p
            class="text-[#B7B7B7] font-akaya text-base font-normal leading-[16.8px] w-[220px] mt-4 ml-7 opacity-0 animate-fade-in delay-[1600ms]"
          >
            I just want you to know how deeply grateful I am to have you.
          </p>
        </div>
      </section>

      <section class="flex items-center px-[2%]">
        <div
          class="flex items-center gap-4 rotate-[-7deg] mr-8 opacity-0 animate-fade-in delay-[1800ms]"
        >
          <img
            class="animate-heartbeat delay-[2000ms]"
            src="/images/love-icon.svg"
            alt="love icon"
          />
          <p
            class="flex items-center gap-3 text-[#2F2E2E] text-shadow-[0px_5.73px_14.324px_rgba(0,0,0,0.12)] font-caveat text-[34.075px] font-semibold leading-[38.164px] opacity-0 animate-fade-in delay-[2300ms]"
          >
            <span> Thank you for </span>

            <span> <img src="/images/arrow.svg" alt="" /> </span>
          </p>
        </div>

        <div
          class="grid grid-cols-2 md:flex md:justify-center mt-10 gap-3 text-[#2F2E2E] font-caveat text-xl font-bold leading-[22.882px] text-shadow-[0px_4.192px_10.481px_rgba(0,0,0,0.12)]"
        >
          <PolaroidCard
            @click="flipped = true"
            image="/images/home-image-1.jpeg"
            caption="...being my favorite person!"
            imgClass="max-w-[372.174px] h-[248.146px] "
            containerClass="cursor-pointer opacity-0 animate-fade-in delay-[3000ms] z-40"
            polaroidClass="rotate-[11deg]"
            captionClass=" "
            :baseDelay="3000"
          />

          <PolaroidCard
            @click="flipped = true"
            image="/images/home-image-2.png"
            caption="...helping me believe in magic "
            imgClass="min-w-[180.174px] max-w-[372.174px]  h-[248.146px]"
            containerClass="cursor-pointer opacity-0 animate-fade-in delay-[3300ms] z-30"
            polaroidClass="rotate-[7deg] -ml-4"
            captionClass=" "
            :baseDelay="3300"
          />

          <PolaroidCard
            @click="flipped = true"
            image="/images/home-image-4.png"
            caption="...being my supporter & safe space "
            imgClass="max-w-[200.174px] h-[248.146px]"
            containerClass="cursor-pointer opacity-0 animate-fade-in delay-[3500ms] z-20"
            polaroidClass="rotate-[-5deg] -ml-7"
            captionClass=""
            :baseDelay="3500"
          />

          <PolaroidCard
            @click="flipped = true"
            image="/images/home-image-1.jpeg"
            caption="...the hugs, cuddles & forehead kisses"
            imgClass="max-w-[372.174px] h-[248.146px] "
            containerClass="cursor-pointer opacity-0 animate-fade-in delay-[3700ms] z-10"
            polaroidClass="rotate-[-10deg] "
            captionClass=""
            :baseDelay="3700"
          />
        </div>
      </section>
    </div>

    <div class="relative">
      <div
        class="absolute -top-[100px] w-[313.639px] h-[810.116px] left-0 opacity-0 animate-fade-in delay-[4000ms]"
      >
        <img src="/images/home-page-footer-img-1.png" alt="" />
      </div>
      <div
        class="absolute -top-[100px] w-[313.639px] h-[810.116px] right-0 opacity-0 animate-fade-in delay-[4300ms]"
      >
        <img
          class="overflow-hidden"
          src="/images/home-page-footer-img-2.png"
          alt=""
        />
      </div>
    </div>
  </section>

  <section
    v-show="flipped"
    class="min-h-screen pb-12 pt-8 overflow-hidden opacity-0 animate-fade-in delay-200ms"
  >
    <section class="flex justify-between px-6 relative">
      <div class="opacity-0 animate-fade-in delay-[400ms] mt-3">
        <p
          class="font-caveat text-[34.075px] font-bold leading-[38.164px] text-[#464646] text-shadow-[0px_5.73px_14.324px_rgba(0,0,0,0.12)] rotate-[-2deg]"
        >
          You make me laugh, even on my worst days
        </p>
      </div>

      <div
        class="pt-8 pb-10 bg-[url('/images/torn-paper.png')] bg-no-repeat bg-contain z-10 font-caveat w-full max-w-[650px] absolute -top-8 right-[15%]"
      >
        <p
          class="text-3xl underline leading-snug w-[57%] mx-auto text-[#545454] font-normal"
        >
          two hearts that <br />
          beat as one
        </p>
      </div>
    </section>

    <div
      class="px-20 grid grid-cols-2 md:flex mt-10 gap-40 text-[#2F2E2E] font-caveat text-xl font-bold leading-[22.882px] text-shadow-[0px_4.192px_10.481px_rgba(0,0,0,0.12)]"
    >
      <PolaroidCard
        @click="flipped = true"
        image="/images/home-image-1.jpeg"
        caption="...being my favorite person!"
        imgClass="max-w-[372.174px] h-[248.146px] "
        containerClass="cursor-pointer opacity-0 animate-fade-in delay-[600ms] z-40 mt-20"
        polaroidClass="rotate-[-10deg]"
        captionClass=" "
        :baseDelay="600"
      />
      <PolaroidCard
        @click="flipped = true"
        image="/images/home-image-1.jpeg"
        caption="...being my favorite person!"
        imgClass="max-w-[372.174px] h-[248.146px] "
        containerClass="cursor-pointer opacity-0 animate-fade-in delay-[600ms] z-40 mt-20"
        polaroidClass="rotate-[12deg]"
        captionClass=" "
        :baseDelay="600"
      />

      <PolaroidCard
        @click="flipped = true"
        image="/images/home-image-4.png"
        caption="...being my supporter & safe space "
        imgClass="max-w-[200.174px] h-[248.146px]"
        containerClass="cursor-pointer opacity-0 animate-fade-in delay-[3500ms] z-20"
        polaroidClass="rotate-[-5deg] -ml-7"
        captionClass=""
        :baseDelay="3500"
      />

      <div class="flex">
        <PolaroidCard
          @click="flipped = true"
          image="/images/home-image-4.png"
          caption="...being my supporter & safe space "
          imgClass="max-w-[200.174px] h-[248.146px]"
          containerClass="cursor-pointer opacity-0 animate-fade-in delay-[3500ms] z-20"
          polaroidClass="rotate-[-5deg] -ml-7"
          captionClass=""
          :baseDelay="3500"
        />

        <p class="text-[29.99px] font-normal leading-[112%]">
          You make me feel seen, loved and
          <span class="text-[#9F5A5A]">valued </span>
        </p>
      </div>
    </div>
    <div
      class="px-20 grid grid-cols-2 md:flex mt-10 gap-40 text-[#2F2E2E] font-caveat text-xl font-bold leading-[22.882px] text-shadow-[0px_4.192px_10.481px_rgba(0,0,0,0.12)]"
    >
      <div class="flex">
        <PolaroidCard
          @click="flipped = true"
          image="/images/home-image-4.png"
          caption="...being my supporter & safe space "
          imgClass="max-w-[200.174px] h-[248.146px]"
          containerClass="cursor-pointer opacity-0 animate-fade-in delay-[3500ms] z-20"
          polaroidClass="rotate-[-5deg] -ml-7"
          captionClass=""
          :baseDelay="3500"
        />

        <p class="text-[29.99px] font-normal leading-[112%] text-[#691313]">
          You love me in a way that feels like a warm hug on a cold day
        </p>
      </div>
      <div class="flex">
        <PolaroidCard
          @click="flipped = true"
          image="/images/home-image-4.png"
          caption="...being my supporter & safe space "
          imgClass="max-w-[200.174px] h-[248.146px]"
          containerClass="cursor-pointer opacity-0 animate-fade-in delay-[3500ms] z-20"
          polaroidClass="rotate-[-5deg] -ml-7"
          captionClass=""
          :baseDelay="3500"
        />

        <p class="text-[29.99px] font-normal leading-[112%] text-black">
          Thank you for the small things and making my heart feel at home
        </p>
      </div>
      <div class="flex">
        <PolaroidCard
          @click="flipped = true"
          image="/images/home-image-4.png"
          caption="...being my supporter & safe space "
          imgClass="max-w-[200.174px] h-[248.146px]"
          containerClass="cursor-pointer opacity-0 animate-fade-in delay-[3500ms] z-20"
          polaroidClass="rotate-[-5deg] -ml-7"
          captionClass=""
          :baseDelay="3500"
        />

        <p class="text-[29.99px] font-normal leading-[112%] text-[#674A4A]">
          I love your calm voice
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const flipped = ref(false);
</script>

<style>
.bg-cream {
  background-color: #fdf6ef;
}

.perspective {
  perspective: 2000px;
}
</style>
