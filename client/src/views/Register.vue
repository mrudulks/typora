<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const register = reactive({
  username: 'imru',
  firstName: 'mrudul',
  lastName: 'ks',
  email: 'mrudul@gmail.com',
  password: '12345',
  age: 20,
});

const confirmPassword = ref('12345');
const error = ref('');
const handleRegister = async () => {
  try {
    if (register.password !== confirmPassword.value) {
      error.value = 'Passwords do not match';
      return;
    }
    await authStore.register(register);
    router.push('/dashboard');
  } catch (err) {
    error.value = 'Registration failed';
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
      </div>
      <form class="mt-8 space-y-6 flex flex-col gap-4" @submit.prevent="handleRegister">
        <div class="flex flex-col gap-4 rounded-md shadow-sm -space-y-px">
          <div>
            <label for="firstName" class="sr-only">First Name</label>
            <input
              id="firstName"
              v-model="register.firstName"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm capitalize"
              placeholder="First Name"
            />
          </div>
          <div>
            <label for="lastName" class="sr-only">Last Name</label>
            <input
              id="lastName"
              v-model="register.lastName"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm capitalize"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label for="username" class="sr-only">Username</label>
            <input
              id="username"
              v-model="register.username"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              v-model="register.email"
              type="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="age" class="sr-only">Age</label>
            <input
              id="age"
              v-model="register.age"
              type="number"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Age"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="register.password"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <label for="confirmPassword" class="sr-only">Confirm Password</label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
      <p v-if="error" class="mt-2 text-center text-sm text-red-600">{{ error }}</p>
    </div>
  </div>
</template>