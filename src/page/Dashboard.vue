<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
import TopBar from '@/components/TopBar.vue'
</script>
<template>
  <div class="flex">
    <SideBar />
    <!-- Content -->
    <main class="ml-16 lg:ml-64 w-full dark:text-white">
      <TopBar />
      <RouterView />
    </main>
  </div>
</template>
