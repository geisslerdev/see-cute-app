<template>
  <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
    <div class="sidebar-content">
      <nav>
        <button class="toggle-btn" @click="toggleSidebar()">
          <img src="@/assets/images/svg/close.svg" width="30px" height="30px" alt="icon-close"/>
        </button>
        <ul>
          <li v-for="item in menuItems" :key="item.text">
            <a @click="routerTo(item.route)">{{ item.text }}</a>
            <div class="divider"></div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSidebarStore } from "@/stores/sidebar";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

const SIDEBAR_STORE = useSidebarStore();
const ROUTER = useRouter();

const isOpen = storeToRefs(SIDEBAR_STORE).getSideBarState;
const menuItems = ref([
  { text: "Home", route: "home" },
  { text: "Galeria", route: "gallery" },
]);

function toggleSidebar(): void {
  SIDEBAR_STORE.setStateSidebar(!SIDEBAR_STORE.getSideBarState);
};

function routerTo(route: string): void {
  ROUTER.push(route);
  toggleSidebar();
}
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  color: white;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  background-color: #FFF;
  z-index: 1000;
  transition: transform .2s;

  &.sidebar-open {
    transform: translateX(0);
  }
}

.sidebar-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.toggle-btn {
  position: absolute;
  top: 0px;
  left: calc(100% - 50px);
  background: none;
  border: none;
  color: #000000;
  font-size: 24px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

nav ul {
  list-style: none;
  padding: 20px;
}

nav ul li {
  margin: 20px 0;
}

nav ul li a {
  color: #000000;
  text-decoration: none;
  font-size: 18px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #e1e1e1;
  margin: 10px 0;
}
</style>
