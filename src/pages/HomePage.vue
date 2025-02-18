<template>
  <CountDown targetDate="2025-02-21T18:00:00" message="Contador de tempo até ver o FOFOF"/>
  <Carousel/>
  <UploadImages />
</template>
<script setup lang="ts">
  import CountDown from '@/components/CountDown.vue';
  import Carousel from '@/components/Carousel.vue';
  import UploadImages from '@/components/UploadImages.vue';
</script>
<style scoped lang="scss"></style>