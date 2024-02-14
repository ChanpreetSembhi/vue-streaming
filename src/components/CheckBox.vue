<script setup lang="ts">
defineProps<{
  id: string;
  label: string;
}>()
</script>

<template>
  <div class="relative flex items-center gap-2">
    <input :id="id" type="checkbox" class="size-4 rounded bg-transparent dark:border-gray-400 text-indigo-600" />
    <label :for="id" class="dark:text-gray-100 text-sm select-none">{{ label }}</label>
  </div>
</template>
