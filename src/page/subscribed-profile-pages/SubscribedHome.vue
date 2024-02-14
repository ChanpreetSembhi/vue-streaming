<script setup lang="ts">
import {
  ClockIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  UserIcon,
  VideoCameraIcon,
  ViewfinderCircleIcon
} from '@heroicons/vue/24/outline'
import { HeartIcon } from '@heroicons/vue/24/solid'
import VideoCard from '@/components/VideoCard.vue'
import SubscribeCard from '@/components/SubscribeCard.vue'
import { ForYouVideo, video, PopularVideo, } from '@/stores/data'
import type { Channels } from '@/stores/data'
import ProfileOne from '@/assets/img/channel-profile/icon-4.png'
import ProfileTwo from '@/assets/img/channel-profile/icon-6.png'
import ProfileThree from '@/assets/img/channel-profile/icon-12.png'

// channel profiles
const channels:Channels[] = [
  {
    id:'0',
    img: ProfileOne,
    name: 'King',
    subscriber: '1.5K',
  },
  {
    id:'1',
    img: ProfileTwo,
    name: 'King',
    subscriber: '1.5K',
  },
  {
    id:'2',
    img: ProfileThree,
    name: 'King',
    subscriber: '1.5K',
  },
];
</script>
<template>
  <div class="flex flex-col lg:flex-row gap-5 pb-6 border-b border-gray-300 dark:border-gray-700">
    <!-- video -->
    <div class="lg:w-2/3 w-full">
      <div class="flex flex-col lg:flex-row items-center gap-4">
        <div class="lg:w-1/2 w-full">
          <iframe class="aspect-video h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/KMxo3T_MTvY?si=y9S4nSIdWO1_IEh9" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="lg:w-1/2 w-full">
          <h2 class="text-2xl font-semibold pb-1.5">VS Code Intro</h2>
          <div class="flex items-center space-x-2 md:space-x-4 mb-3">
            <div class="flex items-center gap-1 text-xs text-gray-700 dark:text-gray-400">
              <HeartIcon class="size-4 text-red-500" />
              <span class="hidden md:flex">20,234</span>
            </div>
            <div class="flex items-center gap-1 text-xs text-gray-700 dark:text-gray-400">
              <ClockIcon class="size-4" />
              <span class="hidden md:flex">1 month ago</span>
            </div>
            <div class="flex items-center gap-1 text-xs text-gray-700 dark:text-gray-400">
              <HandThumbUpIcon class="size-4" />
              <span class="hidden md:flex">40% Likes</span>
            </div>
            <div class="flex items-center gap-1 text-xs text-gray-700 dark:text-gray-400">
              <HandThumbDownIcon class="size-4" />
              <span class="hidden md:flex">5% Dislikes</span>
            </div>
          </div>
          <p class="text-sm text-gray-500">
            Visual Studio Code is an open-source lightweight code editor maintained by Microsoft.
            Get the full VS Code Magic Tricks course to write better code faster
          </p>
        </div>
      </div>
    </div>
    <!-- information -->
    <div class="lg:w-1/3 w-full flex lg:justify-center">
      <div class="flex flex-col space-y-3">
        <div class="flex items-center gap-2">
          <UserIcon class="size-5" />
          <p class="dark:text-gray-300">
            1.13 M <span class="text-gray-700 dark:text-gray-500 text-sm">Subscribers</span>
          </p>
        </div>
        <div class="flex items-center gap-2">
          <VideoCameraIcon class="size-5" />
          <p class="dark:text-gray-300">
            174 <span class="text-gray-700 dark:text-gray-500 text-sm">Videos</span>
          </p>
        </div>
        <div class="flex items-center gap-2">
          <ViewfinderCircleIcon class="size-5" />
          <p class="dark:text-gray-300">
            20.35M <span class="text-gray-700 dark:text-gray-500 text-sm">Views</span>
          </p>
        </div>
        <div class="flex items-center gap-2">
          <HandThumbUpIcon class="size-5" />
          <p class="dark:text-gray-300">
            24M <span class="text-gray-700 dark:text-gray-500 text-sm">Likes</span>
          </p>
        </div>
        <div class="flex items-center gap-2">
          <HandThumbDownIcon class="size-5" />
          <p class="dark:text-gray-300">
            2M <span class="text-gray-700 dark:text-gray-500 text-sm">Dislikes</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- for you -->
  <div class="py-6 border-b border-gray-300 dark:border-gray-700">
    <h4 class="text-xl font-semibold pb-3">For You</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <VideoCard :info="ForYouVideos" v-for="ForYouVideos in ForYouVideo" :key="ForYouVideos.id" />
    </div>
  </div>
  <!-- videos -->
  <div class="py-6 border-b border-gray-300 dark:border-gray-700">
    <h4 class="text-xl font-semibold pb-3">Videos</h4>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <VideoCard :info="videos" v-for="videos in video" :key="videos.id" />
    </div>
  </div>
  <!-- popular videos -->
  <div class="py-6 border-b border-gray-300 dark:border-gray-700">
    <h4 class="text-xl font-semibold pb-3">Popular Videos</h4>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <VideoCard :info="PopularVideos" v-for="PopularVideos in PopularVideo" :key="PopularVideos.id" />
    </div>
  </div>
  <!-- channels -->
  <div class="py-6">
    <h4 class="text-xl font-semibold pb-3">Channels</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      <SubscribeCard :channel="channel" v-for="channel in channels" />
    </div>
  </div>
</template>
