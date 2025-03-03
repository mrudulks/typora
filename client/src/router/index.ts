import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import AuthLayout from '../layouts/Authlayout.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: { requiresGuest: true, layout: 'DefaultLayout' },

    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
      meta: { requiresGuest: true, layout: 'DefaultLayout' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { requiresAuth: true, layout: 'AuthLayout' },
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/Notes.vue'),
      meta: { requiresAuth: true, layout: 'AuthLayout' },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  console.log(to.meta.requiresAuth, authStore.isAuthenticated);
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login');
    // } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    //   next('/dashboard');
    // } else {
    //   next();
  }
  next();
});

export default router;