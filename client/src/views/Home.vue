<template>
  <div class="h-full flex flex-col justify-center items-center gap-4">
    <div class="flex flex-col items-center">
      <h1 class="text-4xl text-primary font-bold uppercase ubuntu italic">Welcome to Typora</h1>
      <h6 class="text-gray-500 text-sm font-semibold ubuntu">A Minimal & Powerful Text Editor</h6>
      <p class="text-gray-500 text-xs ubuntu text-center">Typora is designed to provide a seamless writing
        experience,
        whether
        you're jotting down notes, drafting documents, or coding with precision.</p>
    </div>
    <div class="flex flex-col gap-2">
      <button type="button" @click="navigateTo('/notes')"
        class="bg-primary text-white px-4 py-2 rounded-md ubuntu">Notes</button>
      <button type="button" @click="navigateTo('/dashboard')"
        class="bg-white text-primary px-4 py-2 rounded-md ubuntu">Dashboard</button>
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