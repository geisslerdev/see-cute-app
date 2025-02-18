import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import '@/assets/styles/global.scss';
import router from './router/rotuer';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');