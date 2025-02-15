<script setup lang="ts">
import { onMounted } from 'vue';
import CountDown from './components/CountDown.vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Carousel from './components/Carousel.vue';

onMounted(() => {
});
</script>

<template>
  <Header/>
  <Sidebar/>
  <CountDown targetDate="2025-02-21T18:00:00" message="Contador de tempo até ver o FOFOF"/>
  <Carousel/>
</template>