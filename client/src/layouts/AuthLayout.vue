<template>
  <div class="h-screen ">
    <div class="fixed top-0 left-0 right-0 z-50">
      <Header />
    </div>

    <main class="h-full bg-gray-500 max-w-7xl mx-auto sm:px-6 lg:px-8 pt-16 pb-8">
      <!-- <div class="px-4 sm:px-0"> -->
      <slot />
      <!-- </div> -->
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import Header from "@/components/Auth/Header.vue";

const authStore = useAuthStore();

// onMounted(() => {
//   // authStore.getUser();
// });

// const authStore = useAuthStore();
</script>
