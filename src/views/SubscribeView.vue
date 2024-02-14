<script setup lang="ts">
import SubscribeCard from '@/components/SubscribeCard.vue'
import { channel } from '@/stores/data';
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
    <SubscribeCard :channel="channels" v-for="channels in channel" />
  </div>
</template>
