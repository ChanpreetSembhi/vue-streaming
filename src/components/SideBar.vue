<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Bars3Icon,
  HomeIcon,
  ArrowTrendingUpIcon,
  PlayCircleIcon,
  FilmIcon,
  FolderIcon,
  ClockIcon,
  HeartIcon,
  Cog6ToothIcon,
  InformationCircleIcon
} from '@heroicons/vue/24/outline'
import Logo from '@/assets/img/logo.svg'
import { video } from '@/stores/data'

const Profile = video[7]

const open = ref(true)
</script>
<template>
  <aside
    class="fixed top-0 flex flex-col w-16 lg:w-64 h-screen px-3 py-6 border-r border-r-gray-300 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 transition-transform translate-x-0"
  >
    <div class="flex items-center space-x-4 dark:text-gray-50 px-2 pb-3">
      <Bars3Icon class="size-6" @click="open = !open" />
      <div class="lg:flex items-center space-x-2 hidden">
        <img :src="Logo" alt="logo" class="h-5 w-auto" />
        <div class="text-xl font-bold">Vue Web</div>
      </div>
    </div>
    <div
      class="flex flex-col justify-between overflow-y-auto mt-4 h-full divide-y divide-gray-300 dark:divide-gray-700"
    >
      <nav class="space-y-4 divide-y divide-gray-300 dark:divide-gray-700">
        <div class="space-y-3">
          <RouterLink
            to="/explore"
            class="flex items-center justify-center lg:justify-start space-x-3 p-2.5 transition-colors duration-300 transform rounded-lg hover:bg-indigo-500 hover:text-gray-100 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
            active-class="bg-indigo-600 text-gray-100 dark:bg-gray-200 dark:text-gray-800"
          >
            <HomeIcon class="size-4" />
            <span class="text-sm lg:block hidden">Explore</span>
          </RouterLink>
          <RouterLink
            to="/trending"
            class="flex items-center justify-center lg:justify-start space-x-3 p-2.5 transition-colors duration-300 transform rounded-lg hover:bg-indigo-500 hover:text-gray-100 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
            active-class="bg-indigo-600 text-gray-100 dark:bg-gray-200 dark:text-gray-800"
          >
            <ArrowTrendingUpIcon class="size-4" />
            <span class="text-sm lg:block hidden">Trending</span>
          </RouterLink>
          <RouterLink
            to="/subscribe"
            class="flex items-center justify-center lg:justify-start space-x-3 p-2.5 transition-colors duration-300 transform rounded-lg hover:bg-indigo-500 hover:text-gray-100 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
            active-class="bg-indigo-600 text-gray-100 dark:bg-gray-200 dark:text-gray-800"
          >
            <PlayCircleIcon class="size-4" />
            <span class="text-sm lg:block hidden">Subscribe</span>
          </RouterLink>
        </div>
        <div class="space-y-3 pt-3">
          <RouterLink
            to="/history"
            class="flex items-center justify-center lg:justify-start space-x-3 p-2.5 transition-colors duration-300 transform rounded-lg hover:bg-indigo-500 hover:text-gray-100 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
            active-class="bg-indigo-600 text-gray-100 dark:bg-gray-200 dark:text-gray-800"
          >
            <FolderIcon class="size-4" />
            <span class="text-sm lg:block hidden">History</span>
          </RouterLink>
          <RouterLink
            to="/watch-history"
            class="flex items-center justify-center lg:justify-start space-x-3 p-2.5 transition-colors duration-300 transform rounded-lg hover:bg-indigo-500 hover:text-gray-100 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
            active-class="bg-indigo-600 text-gray-100 dark:bg-gray-200 dark:text-gray-800"
          >
            <ClockIcon class="size-4" />
            <span class="text-sm lg:block hidden">Watch later</span>
          </RouterLink>
          <RouterLink
            to="/like-videos"
            class="flex items-center justify-center lg:justify-start space-x-3 p-2.5 transition-colors duration-300 transform rounded-lg hover:bg-indigo-500 hover:text-gray-100 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
            active-class="bg-indigo-600 text-gray-100 dark:bg-gray-200 dark:text-gray-800"
          >
            <HeartIcon class="size-4" />
            <span class="text-sm lg:block hidden">Likes videos</span>
          </RouterLink>
        </div>
        <div class="space-y-3 lg:py-3">
          <div class="px-3 text-xs uppercase dark:text-gray-400 lg:block hidden">SUBSCRIPTIONS</div>
          <RouterLink
            :to="'/subscribed-profile/' + Profile.id"
            class="flex items-center justify-center lg:justify-start gap-2 p-2.5 transition-colors duration-300 transform rounded-lg hover:bg-indigo-500 hover:text-gray-100 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
            active-class="bg-indigo-600 text-gray-100 dark:bg-gray-200 dark:text-gray-800"
          >
            <img :src="Profile.channelIcon" alt="subscribed" class="size-5" />
            <span class="text-sm lg:block hidden">{{ Profile.channelName }}</span>
            <div class="h-2 w-2 rounded-full bg-green-500 ml-auto lg:block hidden"></div>
          </RouterLink>
        </div>
      </nav>
      <div class="lg:pt-4">
        <div class="px-3 text-xs uppercase dark:text-gray-400 lg:block hidden">
          MORE FROM YOUTUBE
        </div>
        <div class="space-y-3 mt-4">
          <RouterLink
            to="/settings"
            class="flex items-center justify-center lg:justify-start space-x-3 p-2.5 transition-colors duration-300 transform rounded-lg hover:bg-indigo-500 hover:text-gray-100 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
            active-class="bg-indigo-600 text-gray-100 dark:bg-gray-200 dark:text-gray-800"
          >
            <Cog6ToothIcon class="size-4" />
            <span class="text-sm lg:block hidden">Settings</span>
          </RouterLink>
          <RouterLink
            to="/info"
            class="flex items-center justify-center lg:justify-start space-x-3 p-2.5 transition-colors duration-300 transform rounded-lg hover:bg-indigo-500 hover:text-gray-100 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
            active-class="bg-indigo-600 text-gray-100 dark:bg-gray-200 dark:text-gray-800"
          >
            <InformationCircleIcon class="size-4" />
            <span class="text-sm lg:block hidden">Info</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </aside>
</template>
