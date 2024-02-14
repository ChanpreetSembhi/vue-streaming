<script setup lang="ts">
defineProps<{
  id: string
  label: string
  type: string
  placeholder?: string
  value?: string
  modelValue: string
}>()

const emits = defineEmits<{
  (e: 'update', modelValue: string): void
}>()
</script>
<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-600 dark:text-gray-200 pb-2">{{
      label
    }}</label>
    <input @input="emits('update', ($event.target as any)?.value)"
      :type="type"
      name="Email"
      :id="id"
      class="block w-full rounded-md border border-gray-600 dark:border-gray-200 p-1.5 px-2 outline-none bg-transparent dark:text-white placeholder:text-gray-400"
      :placeholder="placeholder"
      :value="value"
    />
  </div>
</template>
