<script setup lang="ts">
import Profile from '@/assets/img/profile.png'
import Switch from '@/components/Switch.vue';
</script>
<template>
    <section class="p-5">
        <div class="pb-5 border-b border-gray-300 dark:border-gray-700">
            <div class="mb-5">
                <h4 class="text-xl font-semibold pb-1">Your Channel</h4>
                <p class="text-xs text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, suscipit
                    praesentium aperiam quasi harum.</p>
            </div>
            <div
                class="bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm inline-flex items-center gap-3 p-5 w-full md:w-1/2 lg:w-1/3">
                <img :src="Profile" alt="profile" class="size-16">
                <div>
                    <h5 class="text-lg font-semibold">Mr Singh</h5>
                    <p class="text-xs text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                        excepturi.</p>
                </div>
            </div>
        </div>
        <div class="py-5 border-b border-gray-300 dark:border-gray-700">
            <div class="mb-5">
                <h4 class="text-xl font-semibold pb-1">Notifications</h4>
                <p class="text-xs text-gray-500">Lorem ipsum dolor sit, amet consectetur..</p>
            </div>
            <div class="bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm p-5 mb-3">
                <div class="flex items-center justify-between">
                    <div>
                        <h5 class="font-semibold">Subscriptions</h5>
                        <p class="text-xs text-gray-500">Notify me about activity from the channels I'm subscribed to</p>
                    </div>
                    <Switch />
                </div>
            </div>
            <div class="bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm p-5">
                <div class="flex items-center justify-between">
                    <div>
                        <h5 class="font-semibold">Recommended videos</h5>
                        <p class="text-xs text-gray-500">Notify me of videos I might like based on what I watch</p>
                    </div>
                    <Switch />
                </div>
            </div>
        </div>
        <div class="pt-5">
            <div class="mb-5">
                <h4 class="text-xl font-semibold pb-1">Email notifications</h4>
                <p class="text-xs text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div class="bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm p-5">
                <div class="flex items-center justify-between">
                    <div>
                        <h5 class="font-semibold">Email</h5>
                        <p class="text-xs text-gray-500">Send notification to your subscriber in your email</p>
                    </div>
                    <Switch />
                </div>
            </div>
        </div>
    </section>
</template>