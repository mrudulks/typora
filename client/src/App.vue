<script setup lang="ts">
import { onMounted, computed, defineAsyncComponent } from "vue";
import { useAuthStore } from "./stores/auth";
import { useRoute } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";
import Header from "./components/Auth/Header.vue";

const route = useRoute();
const authStore = useAuthStore();

const layout = computed(() => {
  const layout = route.meta.layout || "DefaultLayout";
  return defineAsyncComponent(() => import(`@/layouts/${layout}.vue`));
});

onMounted(() => {
  authStore.initializeAuth();
});
</script>

<template>
  <div>
    <AuthLayout v-if="authStore.isAuthenticated">
      <router-view />
    </AuthLayout>
    <DefaultLayout v-else>
      <router-view />
    </DefaultLayout>
  </div>
</template>
