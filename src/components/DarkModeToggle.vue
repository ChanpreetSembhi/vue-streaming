<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <div @click="toggleDark()" class="p-1.5">
    <MoonIcon class="size-4" v-if="isDark" />
    <SunIcon class="size-4" v-else />
  </div>
</template>
