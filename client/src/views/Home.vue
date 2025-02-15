<template>
  <div class="home">
    <div class="flex justify-center items-center h-screen">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md" @click="navigateTo('/notes')">Notes</button>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md" @click="navigateTo('/dashboard')">Dashboard</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<style scoped></style>