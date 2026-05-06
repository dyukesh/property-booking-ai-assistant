import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const chatAPI = {
  sendMessage: (message: string) => api.post('/chat', { message }),
  detectIntent: (message: string) => api.post('/chat/intent', { message }),
};

export const propertyAPI = {
  list: (filters?: any) => api.get('/properties', { params: filters }),
  get: (id: string) => api.get(`/properties/${id}`),
  create: (data: any) => api.post('/properties', data),
};

export const bookingAPI = {
  list: () => api.get('/bookings'),
  get: (id: string) => api.get(`/bookings/${id}`),
  create: (data: any) => api.post('/bookings', data),
  update: (id: string, data: any) => api.put(`/bookings/${id}`, data),
  cancel: (id: string) => api.delete(`/bookings/${id}`),
};

export const authAPI = {
  register: (data: any) => api.post('/auth/register', data),
  login: (data: any) => api.post('/auth/login', data),
  logout: () => api.post('/auth/logout'),
  getCurrentUser: () => api.get('/auth/me'),
};

export default api;
