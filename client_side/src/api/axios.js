import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5430', // Sesuaikan dengan backend
});

export default API;
