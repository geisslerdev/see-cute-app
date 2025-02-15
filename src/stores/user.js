import { defineStore } from 'pinia';
import api from '@/services/api';
export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        loading: false,
        error: null,
    }),
    actions: {
        async fetchUsers() {
            this.loading = true;
            try {
                const response = await api.get('/users');
                this.users = response.data;
            }
            catch (error) {
                this.error = 'Erro ao buscar usuários';
            }
            finally {
                this.loading = false;
            }
        }
    }
});
