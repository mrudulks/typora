<template>
  <div class="min-h-screen bg-gray-100">
    <Header />

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// import { useAuthStore } from "@/stores/auth";
import Header from "@/components/Auth/Header.vue";


// const authStore = useAuthStore();
</script>
