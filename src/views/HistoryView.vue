<script setup lang="ts">
import { Cog6ToothIcon, PauseIcon, TrashIcon } from '@heroicons/vue/24/outline'
import type { FunctionalComponent } from 'vue'
import HistoryCard from '@/components/HistoryCard.vue'
import { histories } from '@/stores/data';

type Options = {
  link: string
  icon: FunctionalComponent
  title: string
}

const options: Options[] = [
  {
    link: '#',
    icon: TrashIcon,
    title: 'Clean All Watch history'
  },
  {
    link: '#',
    icon: PauseIcon,
    title: 'Pause Watch history'
  },
  {
    link: '#',
    icon: Cog6ToothIcon,
    title: 'Manage history'
  }
]
</script>
<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold pb-4">Watch History</h1>
    <div class="grid xl:grid-cols-4 grid-cols-1 gap-6">
      <div class="lg:col-span-3">
        <div class="flex flex-col space-y-6">
          <HistoryCard :histories="history" v-for="history in histories" />
        </div>
      </div>
      <div>
        <div class="bg-gray-100 dark:bg-gray-800 rounded-md flex flex-col space-y-1 p-3">
          <a
            v-for="option of options"
            :href="option.link"
            class="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all ease-in-out delay-75"
            ><component :is="option.icon" class="h-5 w-5" />
            <p class="text-sm">{{ option.title }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
