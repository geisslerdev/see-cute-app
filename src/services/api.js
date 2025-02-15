import axios from 'axios';
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Substitua pela sua API
    timeout: 5000, // Tempo limite
    headers: {
        'Content-Type': 'application/json',
    },
});
export default api;
