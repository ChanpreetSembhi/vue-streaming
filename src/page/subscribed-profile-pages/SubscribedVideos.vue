<script setup lang="ts">
import VideoCard from '@/components/VideoCard.vue'
import {video} from '@/stores/data';
</script>
<template>
  <div>
    <h4 class="text-xl font-semibold pb-3">Videos</h4>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <VideoCard :info="videos" v-for="videos in video" :key="videos.id" />
    </div>
  </div>
</template>
