import axios from "axios";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Usa a variável de ambiente
  timeout: 10000, // 10 segundos
});

export default api;