<script setup lang="ts">
import { ref } from 'vue';
import CheckBox from '@/components/CheckBox.vue'
import InputField from '@/components/InputField.vue'
import Image from '@/assets/img/sign-in.svg'
import DarkModeToggle from '@/components/DarkModeToggle.vue';

const email = ref('');
const password = ref('');
</script>

<template>
  <section class="h-screen">
    <DarkModeToggle class="absolute right-0 text-gray-800 dark:text-gray-50 cursor-pointer m-4" />
    <div class="flex flex-col md:flex-row items-center h-full">
      <div class="w-full lg:w-1/2 md:bg-gray-200 md:dark:bg-gray-800 flex flex-row items-center h-full md:p-14">
        <img :src="Image" alt="sign-in" class="w-52 md:w-full" />
      </div>
      <div class="w-full lg:w-1/2 flex flex-row items-center h-full">
        <div class="max-w-lg mx-auto p-6 w-full">
          <div class="text-gray-700 dark:text-gray-50 mb-5">
            <div class="text-4xl font-semibold pb-1">Welcome Back</div>
            <div class="text-gray-600 dark:text-gray-400">Welcome back! Please enter your details.</div>
          </div>
          <form class="mt-6">
            <InputField label="Email" type="email" id="Email" v-model="email" class="mb-5" />
            <InputField label="Password" type="password" id="password" v-model="password" class="mb-4" />
            <div class="flex items-center justify-between">
              <CheckBox label="Remember for 30 days" id="remember" />
              <a href="#" class="text-blue-500 text-sm">Forget Password</a>
            </div>
            <div class="flex flex-col space-y-3 mt-8">
              <RouterLink to="dashboard" class="btn btn-primary">Sign in</RouterLink>
              <RouterLink to="dashboard" class="btn btn-outline">Sign in with Google</RouterLink>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-xs text-center pt-5">
              Don't have an account? <RouterLink to="sign-up" class="text-blue-500">Sign up</RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
