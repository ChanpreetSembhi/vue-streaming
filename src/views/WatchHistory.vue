<script setup lang="ts">
import PartyCard from '@/components/PartyCard.vue';
import partyThumbnailOne from '@/assets/img/party-thumbnail/thumbnail-one.jpg'
import partyThumbnailTwo from '@/assets/img/party-thumbnail/thumbnail-two.jpg'
import partyThumbnailThree from '@/assets/img/party-thumbnail/thumbnail-three.jpg'
import partyThumbnailFour from '@/assets/img/party-thumbnail/thumbnail-four.jpg'

// Continue Watching
import VideoCard from '@/components/VideoCard.vue'
import { video } from '@/stores/data';

const partyItems = [
    {
        thumbnail: partyThumbnailOne,
        title: 'Rampage',
        genres: 'Advanture, Action',
    },
    {
        thumbnail: partyThumbnailTwo,
        title: 'Spiderman',
        genres: 'Science Fiction, Fantasy',
    },
    {
        thumbnail: partyThumbnailThree,
        title: 'Wonder Women',
        genres: 'Advanture, Action',
    },
    {
        thumbnail: partyThumbnailFour,
        title: 'Mortal Engines',
        genres: 'Science Fiction, Suspense',
    },
];
</script>
<template>
    <section class="p-5">
        <div class="mb-8">
            <h2 class="text-2xl font-bold pb-1.5">Parties</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <PartyCard v-for="partyItem in partyItems" :partyItem="partyItem" />
            </div>
        </div>
        <div>
            <h2 class="text-2xl font-bold pb-3">Continue Watching</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <VideoCard :info="videos" v-for="videos in video" :key="videos.id" />
            </div>
        </div>
    </section>
</template>