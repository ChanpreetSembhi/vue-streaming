<script setup lang="ts">
import { ref } from 'vue'
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/vue'
import SubscribedCover from '@/assets/img/profile-cover.jpg'
import SubscribedHome from '@/page/subscribed-profile-pages/SubscribedHome.vue'
import SubscribedVideos from '@/page/subscribed-profile-pages/SubscribedVideos.vue'
import SubscribedChannels from '@/page/subscribed-profile-pages/SubscribedChannels.vue'
import SubscribedAbout from '@/page/subscribed-profile-pages/SubscribedAbout.vue'
import { useRoute } from 'vue-router'
import { video } from '@/stores/data'

const subscribe = ref(true)

const route = useRoute();
const Id = route.params.id;
const profileDetail = video.find((profile) => profile.id === Id)

</script>
<template>
  <main class="p-5">
    <!-- Profile Cover -->
    <img
      :src="SubscribedCover"
      alt="profile-cover"
      class="rounded-lg h-28 lg:h-56 w-full object-cover"
    />
    <TabGroup>
      <!-- Tabs -->
      <div
        class="flex flex-col items-center lg:flex-row lg:items-end justify-between border-b border-gray-300 dark:border-gray-700 p-5 gap-5 -mt-14 mb-8"
      >
        <div class="flex flex-col items-center lg:flex-row lg:items-end gap-6">
          <img :src="profileDetail?.channelIcon" alt="profile" />
          <div class="text-center lg:text-start">
            <h2 class="text-2xl md:text-3xl font-bold pb-2.5">{{ profileDetail?.channelName }}</h2>
            <TabList as="div" class="flex items-center justify-center lg:justify-start gap-5">
              <Tab as="template" v-slot="{ selected }">
                <button
                  :class="[
                    'text-sm font-medium leading-5',
                    'outline-none',
                    selected ? 'dark:text-gray-100 text-blue-500' : 'dark:text-gray-400'
                  ]"
                >
                  Home
                </button>
              </Tab>
              <Tab as="template" v-slot="{ selected }">
                <button
                  :class="[
                    'text-sm font-medium leading-5',
                    'outline-none',
                    selected ? 'dark:text-gray-100 text-blue-500' : 'dark:text-gray-400'
                  ]"
                >
                  Video
                </button>
              </Tab>
              <Tab as="template" v-slot="{ selected }">
                <button
                  :class="[
                    'text-sm font-medium leading-5',
                    'outline-none',
                    selected ? 'dark:text-gray-100 text-blue-500' : 'dark:text-gray-400'
                  ]"
                >
                  Channel
                </button>
              </Tab>
              <Tab as="template" v-slot="{ selected }">
                <button
                  :class="[
                    'text-sm font-medium leading-5',
                    'outline-none',
                    selected ? 'dark:text-gray-100 text-blue-500' : 'dark:text-gray-400'
                  ]"
                >
                  About
                </button>
              </Tab>
            </TabList>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="border border-indigo-600 hover:text-gray-100 hover:bg-indigo-600 dark:text-gray-100 rounded text-sm px-4 py-1.5 transition ease-in-out delay-150"
            :class="subscribe ? 'bg-indigo-600 !text-gray-100' : 'text-indigo-600'"
            @click="subscribe = !subscribe"
          >
            {{ subscribe ? 'Subscribed' : 'Subscribe' }}
          </button>
        </div>
      </div>
      <!-- content -->
      <TabPanels>
        <TabPanel><SubscribedHome /></TabPanel>
        <TabPanel><SubscribedVideos /></TabPanel>
        <TabPanel><SubscribedChannels /></TabPanel>
        <TabPanel><SubscribedAbout /></TabPanel>
      </TabPanels>
    </TabGroup>
  </main>
</template>
