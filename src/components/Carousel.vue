<template>
  <div class="carousel-container" @mouseover="pauseAutoSlide" @mouseleave="startAutoSlide">
    <div class="carousel">
      <button class="carousel-btn prev" @click="prevSlide">&#10094;</button>
      <div class="carousel-slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <img v-for="(image, index) in images" :key="index" :src="image" class="slide" />
      </div>
      <button class="carousel-btn next" @click="nextSlide">&#10095;</button>
    </div>
    <div class="carousel-indicators">
      <span v-for="(image, index) in images" :key="index" @click="goToSlide(index)"
        :class="{ 'active-indicator': index === currentIndex }"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const images = ref([
  new URL('@/assets/images/jpg/image-1.jpg', import.meta.url).href,
  // new URL('@/assets/images/jpg/image-2.jpg', import.meta.url).href,
  // new URL('@/assets/images/jpg/image-3.jpg', import.meta.url).href,
  // new URL('@/assets/images/jpg/image-4.jpg', import.meta.url).href,
  // new URL('@/assets/images/jpg/image-5.jpg', import.meta.url).href,
  // new URL('@/assets/images/jpg/image-6.jpg', import.meta.url).href,
  // new URL('@/assets/images/jpg/image-7.jpg', import.meta.url).href,
  new URL('@/assets/images/jpg/image-8.jpg', import.meta.url).href,
  // new URL('@/assets/images/jpg/image-9.jpg', import.meta.url).href,
  new URL('@/assets/images/jpg/image-10.jpg', import.meta.url).href,
  // new URL('@/assets/images/jpg/image-11.jpg', import.meta.url).href,
  new URL('@/assets/images/jpg/image-12.jpg', import.meta.url).href,
  new URL('@/assets/images/jpg/image-13.jpg', import.meta.url).href,
  new URL('@/assets/images/jpg/image-14.jpg', import.meta.url).href,
  new URL('@/assets/images/jpg/image-15.jpg', import.meta.url).href,
  new URL('@/assets/images/jpg/image-16.jpg', import.meta.url).href,
  new URL('@/assets/images/jpg/image-17.jpg', import.meta.url).href,
  new URL('@/assets/images/jpg/image-18.jpg', import.meta.url).href,
]);

const currentIndex = ref(0);
let autoSlideInterval: any = null;

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
  resetAutoSlide();
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
  resetAutoSlide();
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
  resetAutoSlide();
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 3000);
};

const pauseAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

const resetAutoSlide = () => {
  pauseAutoSlide();
  startAutoSlide();
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  pauseAutoSlide();
});
</script>

<style lang="scss">
.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: auto;
  position: relative;
}

.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-slides img {
  width: 100%;
  flex: 0 0 100%;
  border-radius: 10px;
  object-fit: cover;
  width: 600px;
  height: 600px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 450px;
  }
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.carousel-btn.prev {
  left: 10px;
}

.carousel-btn.next {
  right: 10px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.carousel-indicators span {
  width: 10px;
  height: 10px;
  background: gray;
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
}

.active-indicator {
  background: white;
}
</style>
