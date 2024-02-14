<script setup lang="ts">
import VideoCard from '@/components/VideoCard.vue'
import { video } from '@/stores/data'
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
    <VideoCard :info="videos" v-for="videos in video" :key="videos.id" />
  </div>
</template>
