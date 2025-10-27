<template>
  <div
    class="w-full h-screen flex items-center bg-cover bg-center"
    :style="{ backgroundImage: heroBgStyle }"
  >
    <div
      ref="bgContainer"
      class="w-full h-screen absolute"
      v-if="screenSize !== 'mobile'"
    />
    <UContainer class="max-w-5xl z-1">
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-4 sm:col-span-3 lg:col-span-3">
          <img :src="AM" class="w-full rounded-full" />
        </div>
        <div
          class="col-span-12 sm:col-span-9 lg:col-span-9 dark:text-white text-stone-800"
        >
          <h1 class="text-3xl sm:text-3xl lg:text-6xl inter-700 mb-7">
            <div>
              Hey, I'm
              <span class="gradient-text bg-clip-text text-transparent"
                >Alejandro</span
              >🚀
            </div>
            <div>
              A
              <span class="gradient-text bg-clip-text text-transparent"
                >Software developer</span
              >
            </div>
          </h1>
          <h2
            class="wrap-break-word text-md sm:text-lg lg:text-xl inter-500 mb-7"
          >
            <span class="inter-700">Passionate about building</span>
            performant web and mobile apps, where frontend meets cloud —
            delivering seamless experiences with scalable architecture.
          </h2>
          <div class="flex flex-row items-center gap-5 flex-wrap">
            <UButton
              label=" View Projects"
              color="neutral"
              icon="i-lucide-layout-dashboard"
            />
            <UButton
              label=" View Experience"
              color="neutral"
              icon="i-lucide-user-star"
            />
            <span class="hidden sm:block">|</span>
            <UButton icon="i-lucide-linkedin" variant="ghost" color="neutral" />
            <UButton icon="i-lucide-github" variant="ghost" color="neutral" />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
  <div class="border-b border-stone-200 dark:border-stone-800" />
</template>

<script lang="ts" setup>
import lottie, { type AnimationItem } from "lottie-web";

import AM from "@/assets/images/am.png";
import HeroLight from "@/assets/images/hero-light.png";
import HeroDark from "@/assets/images/hero-dark.png";
import LottieAnimation from "@/assets/bg2.json";

let animation: AnimationItem | null = null;
let observer: MutationObserver;
const screenWidth = ref(0);
const screenSize = ref<"mobile" | "tablet" | "desktop">();

const activeTheme = ref<"light" | "dark">("light");
const bgContainer = ref<HTMLDivElement | null>(null);

const detectTheme = () => {
  activeTheme.value = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  if (activeTheme.value === "light") changeAnimationOpacity(0.6);
  if (activeTheme.value === "dark") changeAnimationOpacity(0.5);
};

const updateScreenSize = () => {
  screenWidth.value = window.innerWidth;
  if (screenWidth.value < 640) screenSize.value = "mobile";
  else if (screenWidth.value < 1024) screenSize.value = "tablet";
  else screenSize.value = "desktop";
};

const changeAnimationOpacity = (opacity: number) => {
  if (bgContainer.value) bgContainer.value.style.opacity = `${opacity}`;
};

const heroBgStyle = computed(() => {
  if (screenSize.value !== "mobile") return "";
  if (activeTheme.value === "light") return `url(${HeroLight})`;
  return `url(${HeroDark})`;
});

onMounted(() => {
  detectTheme();
  updateScreenSize();
  observer = new MutationObserver(detectTheme);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  if (bgContainer.value) {
    animation = lottie.loadAnimation({
      container: bgContainer.value,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: LottieAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
    animation.setSpeed(0.3);
  }
});
</script>
