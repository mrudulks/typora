<template>
  <nav class="bg-quinary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">

        <div class="flex items-center ml-auto">
          <ReusableDropdown :content-padding="false" :classes="'p-2'">
            <template #dropdown-trigger="{ toggleDropdown }">
              <button @click="toggleDropdown"
                class="shadow-md bg-[#B2ABFF] text-white h-11 w-11 flex items-center justify-center rounded-full text-sm font-medium hover:grayscale">
                <AvatarIcon />
              </button>
            </template>
            <template #dropdown-content>
              <div class="flex flex-col">
                <template v-for="item in dropdownMenus" :key="item.label">
                  <button type="button" @click="onClickMenuItem(item)"
                    class="w-full h-8 px-2 text-left text-sm rounded-md font-medium hover:bg-gray-100">
                    {{ item.label }}
                  </button>
                </template>
              </div>
            </template>
          </ReusableDropdown>

        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();

import ReusableDropdown from "@/components/Reusable/Dropdown.vue";
import AvatarIcon from "@/components/Ui/AvatarIcon.vue";

const isOpen = ref(false);
const dropdownMenus = [
  {
    label: 'Profile',
    icon: 'user',
    to: '/profile'
  },
  {
    label: 'Settings',
    icon: 'settings',
    to: '/settings'
  },
  {
    label: 'Logout',
    icon: 'logout',
    to: '/logout'
  }
]
const handleLogout = () => {
  authStore.logout();
  router.push("/login");
};

const onClickMenuItem = (item: any) => {
  switch (item.label) {
    case 'Logout':
      handleLogout();
      break;
    default:
      return;
      router.push(item.to);
      break;
  }
}
</script>
