<script setup lang="ts">
defineProps<{
  id: string
  name: string
  label: string
  checked?: boolean
}>()
</script>

<template>
  <div class="flex items-center gap-x-2">
    <input
      :id="id"
      :name="name"
      type="radio"
      class="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 bg-transparent" :checked="checked"
    />
    <label :for="id" class="block text-sm font-medium leading-6 dark:text-gray-100">{{
      label
    }}</label>
  </div>
</template>
