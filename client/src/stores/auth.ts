import { defineStore } from 'pinia';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import type { AuthState, LoginCredentials, RegisterCredentials, User } from '../types/auth';

const API_URL = 'http://localhost:4000/api'; // Replace with your actual API URL

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
  }),

  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    isUserAuthenticated: (state) => state.isAuthenticated,
  },

  actions: {
    async login(credentials: LoginCredentials) {
      try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        console.log("response", response.data);
        const { token } = response.data;

        this.setToken(token);
        this.user = response.data.user;
        return true;
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },

    async register(credentials: RegisterCredentials) {
      try {
        const response = await axios.post(`${API_URL}/auth/register`, credentials);
        const { token } = response.data;

        this.setToken(token);
        return true;
      } catch (error) {
        console.error('Registration error:', error);
        throw error;
      }
    },

    setToken(token: string) {
      console.log("token", token);
      this.token = token;
      this.isAuthenticated = true;
      localStorage.setItem('token', token);

      const decoded = jwtDecode<{ user: User }>(token);
      this.user = decoded.user;

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },

    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    },

    async initializeAuth() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          this.setToken(token);
        } catch (error) {
          this.logout();
        }
      }
    },
  },
});