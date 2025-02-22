import { defineStore } from 'pinia';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import type { AuthState, LoginCredentials, RegisterCredentials, User } from '../types/auth';
import { axiosInstance } from '../plugins/api';
// import { useRoute , useRouter} from 'vue-router';

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    access: null,
    refresh: null,
    isAuthenticated: false,
  }),

  getters: {
    getUser: (state) => state.user,
    getAccessToken: (state) => state.access,
    getRefreshToken: (state) => state.refresh,
    isUserAuthenticated: (state) => state.isAuthenticated,
  },

  actions: {
    async login(credentials: LoginCredentials) {
      try {
        const response: any = await axiosInstance.post('/auth/login', credentials);
        this.setAuthenticated(true);
        this.user = response.user;
        return true;
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },

    async register(credentials: RegisterCredentials) {
      try {
        const response: any = await axiosInstance.post('/users', credentials);
        return response;
      } catch (error) {
        console.error('Registration error:', error);
        throw error;
      }
    },

    async getProfile(from: string = '') {
      console.log("getProfile", from);
      try {
        const { isLoggedIn, user }: any = await axiosInstance.get('/auth/me');
        if (isLoggedIn) {
          this.setAuthenticated(true);
          this.user = user;
        }
      } catch (error) {
        console.error('User retrieval error:', error);
        throw error;
      }
    },
    setAuthenticated(value: boolean) {
      this.isAuthenticated = value;
    },

    setToken(token: string) {
      console.log("token", token);
      this.access = token;
      this.isAuthenticated = true;
      // localStorage.setItem('access', token);

      const decoded = jwtDecode<{ user: User }>(token);
      this.user = decoded.user;

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },

    async logout() {
      await axiosInstance.post('/auth/logout');
      this.user = null;
      this.access = null;
      this.refresh = null;
      this.isAuthenticated = false;
      delete axios.defaults.headers.common['Authorization'];
    },

    async initializeAuth() {
      await this.getProfile("initializeAuth");
      if (this.isAuthenticated && this.user) {
        try {
          this.setAuthenticated(true);
          this.user = this.user;
        } catch (error) {
          console.error('Initialization error:', error);
          this.logout();
        }
      }
    },
  },
});