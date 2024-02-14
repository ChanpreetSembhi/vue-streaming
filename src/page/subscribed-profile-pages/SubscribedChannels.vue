<script setup lang="ts">
import SubscribeCard from '@/components/SubscribeCard.vue'
import ProfileOne from '@/assets/img/channel-profile/icon-4.png'
import ProfileTwo from '@/assets/img/channel-profile/icon-6.png'
import ProfileThree from '@/assets/img/channel-profile/icon-12.png'
import type { Channels } from '@/stores/data'
const channels:Channels[] = [
  {
    id: '0',
    img: ProfileOne,
    name: 'King',
    subscriber: '1.5K'
  },
  {
    id: '1',
    img: ProfileTwo,
    name: 'King',
    subscriber: '1.5K'
  },
  {
    id: '2',
    img: ProfileThree,
    name: 'King',
    subscriber: '1.5K'
  }
]
</script>

<template>
  <div>
    <h4 class="text-xl font-semibold pb-3">Channels</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      <SubscribeCard :channel="channel" v-for="channel in channels" />
    </div>
  </div>
</template>
