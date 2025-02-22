<template>
    <div v-click-outside class="dropdown relative inline-block text-left">
        <!-- <div class="dropdown-button" @click="toggleDropdown"> -->
        <slot name="dropdown-trigger" :toggleDropdown="toggleDropdown"></slot>
        <!-- </div> -->
        <Transition name="dropdown" enter-active-class="transition transform duration-200 ease-out"
            enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
            leave-active-class="transition transform duration-150 ease-in" leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95">
            <div v-if="isOpen" :class="['absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg',
                contentPadding ? 'p-4' : '',
                classes
            ]">
                <slot name="dropdown-content"></slot>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

defineOptions({
    name: 'Dropdown'
});
defineProps({
    contentPadding: {
        type: Boolean,
        default: true
    },
    classes: {
        type: String,
        default: ''
    }
});

const isOpen = ref(false);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
}

const closeDropdown = () => {
    isOpen.value = false;
}

</script>
