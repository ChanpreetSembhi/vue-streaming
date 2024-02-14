<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
} from '@heroicons/vue/24/outline'
import {
  PlayIcon
} from '@heroicons/vue/24/solid'
import type { ForYouVideos, Histories, PopularVideos, Trendings, Videos } from '@/stores/data';

defineProps<{
  info: Videos | Trendings | ForYouVideos | PopularVideos | Histories
}>()

const trending = ref(true)
const verify = ref(true)
</script>
<template>
  <RouterLink :to="'/video-detail/' + info.id">
    <div class="relative group">
      <img :src="info.thumbnail" alt="" class="rounded-md mb-3 z-20" />
      <div
        class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center rounded-md group-hover:bg-gray-900/30 transition ease-in-out duration-200 z-0"
      >
        <PlayIcon class="size-10 text-gray-200 transition ease-in-out duration-200 invisible group-hover:visible" />
      </div>
      <img
        :src="info.channelIcon"
        alt=""
        class="h-8 w-8 md:h-6 md:w-6 rounded-full absolute bottom-4 left-4 transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300 cursor-pointer z-10"
      />
    </div>
    <div>
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center space-x-2">
          <ArrowTrendingUpIcon class="size-4 text-green-500" v-if="trending === info.trending" />
          <ArrowTrendingDownIcon class="size-4 text-red-500" v-else />
          <p class="text-gray-600 dark:text-gray-200 text-xs">{{ info.views }} views</p>
        </div>
        <p class="text-gray-600 dark:text-gray-200 text-xs">{{ info.uploadTime }} ago</p>
      </div>
      <div class="text-gray-800 dark:text-gray-50 font-semibold mb-2">{{ info.title }}</div>
      <div class="flex items-center space-x-1">
        <p class="text-gray-700 dark:text-gray-200 text-sm">{{ info.channelName }}</p>
        <CheckCircleIcon
          class="size-4 text-green-500"
          :class="info.verify"
          v-if="verify === info.verify"
        />
      </div>
    </div>
  </RouterLink>
</template>
