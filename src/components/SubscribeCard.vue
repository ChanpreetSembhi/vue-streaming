<script setup lang="ts">
import { ref } from 'vue';
import { BellAlertIcon, BellIcon } from '@heroicons/vue/24/outline'
import type { Channels } from '@/stores/data';
defineProps<{
  channel: Channels
}>()
const subscribe = ref(false)
const notification = ref(false)
</script>
<template>
  <div
    class="bg-gray-100 border border-gray-200 dark:bg-gray-800 text-center dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm p-5"
  >
    <img :src="channel.img" alt="profile" class="size-24 mx-auto rounded-full" />
    <div class="my-5">
      <div class="font-semibold pb-0.5">{{ channel.name }}</div>
      <div class="text-gray-600 dark:text-gray-400 text-xs">
        {{ channel.subscriber }} subscribers
      </div>
    </div>
    <div class="flex items-center justify-center space-x-2">
      <button
        type="button"
        class="border border-indigo-600 hover:text-gray-100 hover:bg-indigo-600 dark:text-gray-100 rounded text-sm px-5 py-1.5 transition ease-in-out delay-150"
        :class="subscribe ? 'bg-indigo-600 !text-gray-100' : 'text-indigo-600'"
        @click="subscribe = !subscribe"
      >
        {{ subscribe ? 'Subscribed' : 'Subscribe' }}
      </button>
      <button
        v-if="subscribe === true"
        type="button"
        class="border border-indigo-600 hover:bg-indigo-600 hover:text-gray-100 dark:text-gray-100 rounded text-sm p-1.5 transition ease-in-out delay-150" :class="notification ? 'bg-indigo-600 !text-gray-100' : 'text-indigo-600'"
        @click="notification = !notification"
      >
        <BellIcon class="size-5" v-if="notification == false" />
        <BellAlertIcon class="size-5" v-else />
      </button>
    </div>
  </div>
</template>
