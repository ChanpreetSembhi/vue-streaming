<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'
import { PlayIcon } from '@heroicons/vue/24/solid'
import type { Histories } from '@/stores/data'

defineProps<{
  histories: Histories
}>()

const trending = ref(true)
const verify = ref(true)
</script>

<template>
  <RouterLink :to="'/video-detail/' + histories.id">
    <div class="flex flex-col md:flex-row gap-4">
      <div class="relative group md:w-1/3">
        <img :src="histories.thumbnail" alt="thumbnail" class="rounded-md z-20 h-full w-full" />
        <div
          class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center rounded-md group-hover:bg-gray-900/30 transition ease-in-out duration-200 z-0">
          <PlayIcon class="size-10 text-gray-200 transition ease-in-out duration-200 invisible group-hover:visible" />
        </div>
        <img :src="histories.channelIcon" alt="channel-icon"
          class="h-8 w-8 md:h-6 md:w-6 rounded-full absolute bottom-4 left-4 transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300 cursor-pointer z-10" />
      </div>
      <div class="md:w-2/3">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center space-x-2">
            <ArrowTrendingUpIcon class="size-4 text-green-500" v-if="trending === histories.trending" />
            <ArrowTrendingDownIcon class="size-4 text-red-500" v-else />
            <p class="text-gray-600 dark:text-gray-200 text-xs">{{ histories.views }} views</p>
          </div>
          <p class="text-gray-600 dark:text-gray-200 text-xs">{{ histories.uploadTime }} ago</p>
        </div>
        <h6 class="text-gray-800 dark:text-gray-50 md:text-xl font-semibold pb-0.5">{{ histories.title }}</h6>
        <p class="text-gray-600 dark:text-gray-200 text-xs md:text-sm mb-3">{{ histories.content }}</p>
        <div class="flex items-center space-x-1">
          <p class="text-gray-700 dark:text-gray-200 text-sm">{{ histories.channelName }}</p>
          <CheckCircleIcon class="size-4 text-green-500" :class="histories.verify" v-if="verify === histories.verify" />
        </div>
      </div>
    </div>
  </RouterLink>
</template>
