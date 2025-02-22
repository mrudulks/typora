<template>
  <div>
    <slot name="modal-trigger" :toggleModal="toggleModal"></slot>
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        @click.self="toggleModal">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
          <div>
            <slot name="modal-content" :toggleModal="toggleModal"></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true
  },
});

const isOpen = ref(false);

const toggleModal = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
/* Tailwind CSS transition for fade effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>