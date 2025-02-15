import { defineStore } from 'pinia';
import api from '@/services/api';

interface User {
  id: number;
  name: string;
  email: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await api.get('/users');
        this.users = response.data;
      } catch (error) {
        this.error = 'Erro ao buscar usuários';
      } finally {
        this.loading = false;
      }
    }
  }
});