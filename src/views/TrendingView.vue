<script setup lang="ts">
import VideoCard from '@/components/VideoCard.vue'
import { trending } from '@/stores/data'
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
    <VideoCard :info="trendings" v-for="trendings in trending" :key="trendings.id" />
  </div>
</template>
