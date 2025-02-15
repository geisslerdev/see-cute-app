<template>
  <div class="countdown-container">
    <div class="image-container">
      <img class="pico-image" src="@/assets/images/png/PICO-PARK-2.png" alt="pico pico">
    </div>
    <h1 class="countdown-title">
      {{ messageView }}
    </h1>
    <div class="countdown-timer">
      <div v-for="(value, unit) in timeLeft" :key="unit" class="countdown-box">
        <span class="countdown-value">{{ value }}</span>
        <div class="countdown-label">{{ unitLabels[unit] }}</div>
      </div>
    </div>
    <h1 class="countdown-title">
      O GRANDE DIA: {{ finalDay }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface Props {
  targetDate: string;
  message: string;
}

const props = defineProps<Props>();
const timeLeft = ref<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
const messageView = ref<string>('');
const finalDay = ref<string>('');
const unitLabels: Record<string, string> = {
  days: "Dias",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos"
};

let timer = ref();
const calculateTimeLeft = () => {
  const difference = new Date(props.targetDate).getTime() - new Date().getTime();
  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
};

onMounted(() => {
  messageView.value = props.message.toUpperCase();
  finalDay.value = new Date(props.targetDate).toLocaleDateString();

  calculateTimeLeft();
  timer.value = setInterval(calculateTimeLeft, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer.value);
});
</script>

<style scoped lang="scss">
.countdown-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // height: calc(100vh - 80px);
  width: 100vw;
  background: linear-gradient(180deg, #6a11cb, #2575fc);
  color: white;
  box-sizing: border-box;
  padding: 60px 20px 20px;
}

.pico-image {
  width: 200px;
  height: auto;
  animation: jump 1s infinite;
}

@keyframes jump {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  } 
}

.countdown-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.countdown-timer {
  display: flex;
  gap: 15px;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
}

.countdown-box {
  background: rgba(255, 255, 255, 0.2);
  padding: 15px 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 85px;
  box-sizing: border-box;
}

.countdown-value {
  font-size: 2.5rem;
  font-weight: bold;
}

.countdown-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-top: 5px;
}
</style>
