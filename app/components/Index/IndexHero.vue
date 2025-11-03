<template>
  <div
    class="relative w-full h-screen flex flex-row items-center justify-center bg-cover bg-center"
    :style="{ backgroundImage: heroBgStyle }"
  >
    <Lottie
      name="hero-bg"
      :speed="0.3"
      class="opacity-60 dark:opacity-50 absolute"
      height="100vh"
      :renderer-settings="{
        preserveAspectRatio: 'xMidYMid slice',
      }"
      v-if="screenSize != 'mobile'"
    />
    <UContainer class="max-w-5xl z-1 relative">
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
              <span class="am-gradient-text bg-clip-text text-transparent"
                >Alejandro</span
              >🚀
            </div>
            <div>
              A
              <span class="am-gradient-text bg-clip-text text-transparent"
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
              to="/projects"
            />
            <UButton
              label=" View Experience"
              color="neutral"
              icon="i-lucide-user-star"
              to="/experience"
            />
            <span class="hidden sm:block">|</span>
            <UButton
              leading-icon="i-lucide-linkedin"
              variant="ghost"
              color="neutral"
              to="https://www.linkedin.com/in/amilland/"
              target="_blank"
              trailing-icon="i-lucide-external-link"
              :ui="{
                trailingIcon: 'size-2.5 mt-[-10px]',
              }"
            />
            <UButton
              leading-icon="i-lucide-github"
              variant="ghost"
              color="neutral"
              to="https://github.com/alejandromillan29"
              target="_blank"
              trailing-icon="i-lucide-external-link"
              :ui="{
                trailingIcon: 'size-2.5 mt-[-10px]',
              }"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
  <div class="am-separator" />
</template>

<script lang="ts" setup>
import AM from "@/assets/images/am.png";
import HeroLight from "@/assets/images/hero-light.png";
import HeroDark from "@/assets/images/hero-dark.png";

const colorMode = useColorMode();

const screenWidth = ref(0);
const screenSize = ref<"mobile" | "tablet" | "desktop">();

const updateScreenSize = () => {
  screenWidth.value = window.innerWidth;
  if (screenWidth.value < 640) screenSize.value = "mobile";
  else if (screenWidth.value < 1024) screenSize.value = "tablet";
  else screenSize.value = "desktop";
};

const heroBgStyle = computed(() => {
  if (screenSize.value !== "mobile") return "";
  if (colorMode.value === "dark") return `url(${HeroDark})`;
  return `url(${HeroLight})`;
});

onMounted(() => {
  updateScreenSize();
});
</script>
