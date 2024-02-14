<script setup lang="ts">
import memberOne from '@/assets/img/channel-profile/icon-2.png'
import memberTwo from '@/assets/img/channel-profile/icon-3.png'
import memberThree from '@/assets/img/channel-profile/icon-4.png'
import memberFour from '@/assets/img/channel-profile/icon-5.png'
import memberFive from '@/assets/img/channel-profile/icon-6.png'

defineProps<{
    partyItem: {
        thumbnail: string,
        title: string,
        genres: string,
    }
}>()
</script>
<template>
    <div
        class="bg-gray-100 border border-gray-200 dark:bg-gray-800 text-center dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm p-5">
        <div class="flex items-center justify-between mb-3">
            <img :src="partyItem.thumbnail" alt="party-thumbnail" class="rounded-lg aspect-video w-1/2">
            <div class="flex items-center -space-x-2">
                <img :src="memberOne" alt="parties-members"
                    class="size-6 rounded-full border-2 border-gray-100 dark:border-gray-800">
                <img :src="memberTwo" alt="parties-members"
                    class="size-6 rounded-full border-2 border-gray-100 dark:border-gray-800">
                <img :src="memberThree" alt="parties-members"
                    class="size-6 rounded-full border-2 border-gray-100 dark:border-gray-800">
                <img :src="memberFour" alt="parties-members"
                    class="size-6 rounded-full border-2 border-gray-100 dark:border-gray-800">
                <img :src="memberFive" alt="parties-members"
                    class="size-6 rounded-full border-2 border-gray-100 dark:border-gray-800">
            </div>
        </div>
        <div class="text-start">
            <h6 class="text-lg font-semibold pb-0.5">{{ partyItem.title }}</h6>
            <p class="text-sm text-gray-500">{{ partyItem.genres }}</p>
        </div>
    </div>
</template>