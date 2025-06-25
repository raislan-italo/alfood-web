import axios from "axios";

// Cria uma instância do axios
const http = axios.create({
  baseURL: 'http://localhost:8000/api/v2/'
})

export default http;