import { defineStore } from "pinia";

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    stateSidebar: <boolean>false
  }),
  getters: {
    getSideBarState: (state) => state.stateSidebar
  },
  actions: {
    setStateSidebar(value: boolean) {
      this.stateSidebar = value;
    },
  },
});