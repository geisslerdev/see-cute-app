<template>
  <div class="header-conainer">
    <div class="header-menu" @click="handleClickMenu()">
      <img src="@/assets/images/svg/menu.svg" width="30px" height="30px" alt="icon-menu">
    </div>
    <div class="header-divider"></div>
    <div class="header-content">
      <span class="header-title">
        Fofo timer
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar';

const SIDEBAR_STORE = useSidebarStore();

function handleClickMenu(): void {
  SIDEBAR_STORE.setStateSidebar(true);
}
</script>
<style scoped lang="scss">
.header-conainer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: #f8f8f8;
  height: 60px;
  padding: 10px;
  text-align: center;

  >.header-menu {
    cursor: pointer;
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  >.header-divider {
    width: 1px;
    height: 100%;
    background-color: #e0e0e0;
  }

  >.header-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    >.header-title {
      font-size: 1.5rem;
    }
  }
}
</style>