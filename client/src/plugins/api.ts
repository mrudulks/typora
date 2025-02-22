import axios, { } from 'axios';
import type { App } from 'vue';
import type { Pinia } from 'pinia';
import Cookies from 'js-cookie';

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'; 

const axiosInstance = axios.create({
    baseURL: '/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

const getCookies = () => {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [name, value] = cookie.trim().split('=');
        acc[name] = value;
        return acc;
    }, {} as Record<string, string>);
    return cookies;
}
const getAccessToken = () => {
    const cookies = getCookies();
    return cookies['access'];
}
const getRefreshToken = () => {
    const cookies = getCookies();
    return cookies['refresh'];
}
const nonAuthRoutes = ['/login', '/register'];

axiosInstance.interceptors.request.use(
    (config: any) => {
        let access;

        const accessFromCookie = getAccessToken();
        if (nonAuthRoutes.includes(config.url)) {
            return config;
        }
        if (accessFromCookie) {

            access = accessFromCookie;
        }

        if (access) {
            config.headers['Authorization'] = `Bearer ${access}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            const refresh = getRefreshToken();
            if (refresh) {
                try {
                    const response: any = axiosInstance.post('/auth/refresh', { refresh }).then((res) => {
                        return res.data;
                    }).catch((err) => {
                        return err;
                    });
                    return response.data;
                } catch (refreshError) {
                    console.error('Refresh token error:', refreshError);
                    localStorage.removeItem('access');
                    localStorage.removeItem('refresh');
                    window.location.href = '/login';
                }
            }
        }

        return Promise.reject(error);
    }
);

const returnResponse = (res: any) => {
    return res.data;
}

const ApiPlugin = {
    install: (app: App, options: { store: Pinia }) => {
        const apiMethods = {
            get: (url: string) => axiosInstance.get(url),
            post: (url: string, data: any) => axiosInstance.post(url, data),
            put: (url: string, data: any) => axiosInstance.put(url, data).then(returnResponse).catch((err: any) => {
                return err;
            }),
            delete: (url: string) => axiosInstance.delete(url).then(returnResponse).catch((err: any) => {
                return err;
            }),
        };
        app.provide('$api', apiMethods);
        app.config.globalProperties.$api = apiMethods;
    },
};

export default ApiPlugin;
export { axiosInstance };