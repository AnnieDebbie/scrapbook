<template>
  <section class="relative min-h-screen overflow-hidden">
    <div class="absolute top-0 left-0">
      <img src="/images/wavy-lines.png" class="z-10" />
    </div>
    <!-- Animated Lights Image -->
    <img
      src="/images/lights-bg.png"
      alt="Festive Lights"
      class="absolute top-0 left-0 w-[80%] z-30 animate-lights-twinkle"
    />
    <img
      src="/images/lights-bg-2.png"
      alt="Festive Lights"
      class="absolute top-0 -right-[23%] z-30 animate-lights-twinkle"
    />

    <!-- Polaroid Drop Zone -->
    <section
      class="bg-[url('/images/happy-birthday-bg.png')] h-full bg-no-repeat bg-cover min-h-screen mt-32 relative z-50 flex items-center justify-center mx-20"
    >
      <div class="mt-32 w-[1000px] h-[700px] mx-auto max-h-max">
        <div class="max-w- max-h">
          <img
            v-for="(img, i) in polaroids"
            :key="img.src"
            :src="img.src"
            class="absolute object-cover border-4 border-white p-3 bg-white shadow-lg opacity-0 animate-polaroid-drop z-50"
            :style="{
              left: img.left,
              top: img.top,
              width: img.width,
              transform: `rotate(${img.rotate}deg)`,
              animationDelay: `${img.delay + 1}s`,
              zIndex: `${img.zIndex}`,
              objectFit: 'cover',
              maxHeight: '350px',
            }"
          />
        </div>
      </div>
    </section>

    <div
      class="absolute left-1/2 top-[50%] -translate-x-1/2 z-50 opacity-0 animate-sticker-pop-in delay-[4000ms]"
    >
      <img
        src="/images/birthday-sticker.png"
        alt="Birthday Sticker"
        class="w-[300px] mx-auto"
      />
    </div>

    <div
      class="absolute bottom-8 left-8 z-50 cursor-pointer group opacity-0 animate-fade-in delay-[5000ms]"
    >
      <router-link to="/notes" class="">
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
  </section>
</template>

<script setup>
const polaroids = [
  {
    src: "/images/final-img-1.jpeg",
    left: "0",
    top: "45%",
    width: "250px",
    rotate: -8,
    delay: 0,
    zIndex: 30,
  },
  {
    src: "/images/final-img-2.jpeg",
    left: "15%",
    top: "15%",
    width: "280px",
    rotate: 12,
    delay: 0.3,
    zIndex: 20,
  },
  {
    src: "/images/final-img-3.jpeg",
    left: "36%",
    top: "15%",
    width: "300px",
    rotate: -12,
    delay: 0.6,
    zIndex: 30,
  },
  {
    src: "/images/final-img-4.jpeg",
    left: "58%",
    top: "18%",
    width: "350px",
    rotate: 12,
    delay: 0.9,
    zIndex: 40,
  },

  {
    src: "/images/final-img-6.jpeg",
    left: "0",
    top: "65%",
    width: "300px",
    rotate: -4,
    delay: 1.2,
    zIndex: 40,
  },
  {
    src: "/images/final-img-5.jpeg",
    left: "30%",
    top: "40%",
    width: "200px",
    rotate: 4,
    delay: 1.5,
    zIndex: 30,
  },

  {
    src: "/images/final-img-7.jpeg",
    left: "50%",
    top: "55%",
    width: "200px",
    rotate: -4,
    delay: 1.9,
  },
  {
    src: "/images/final-img-8.jpeg",
    left: "20%",
    top: "55%",
    width: "230px",
    rotate: 4,
    delay: 2.2,
  },
  {
    src: "/images/final-img-9.jpeg",
    left: "35%",
    top: "65%",
    width: "200px",
    rotate: 4,
    delay: 2.6,
  },
  {
    src: "/images/final-img-10.jpeg",
    left: "65%",
    top: "65%",
    width: "250px",
    rotate: 4,
    delay: 3.0,
  },
  // ...add more as needed
];
</script>

<style scoped>
@keyframes lights-twinkle {
  0%,
  100% {
    filter: brightness(1) drop-shadow(0 0 8px #ffe066);
    opacity: 1;
  }
  20% {
    filter: brightness(1.2) drop-shadow(0 0 16px #ffd700);
    opacity: 0.85;
  }
  40% {
    filter: brightness(0.8) drop-shadow(0 0 4px #ffd700);
    opacity: 0.7;
  }
  60% {
    filter: brightness(1.3) drop-shadow(0 0 20px #fffbe6);
    opacity: 1;
  }
  80% {
    filter: brightness(0.9) drop-shadow(0 0 6px #ffe066);
    opacity: 0.8;
  }
}
.animate-lights-twinkle {
  animation: lights-twinkle 2.5s infinite linear;
}

.font-caveat {
  font-family: "Caveat", cursive;
}
</style>
