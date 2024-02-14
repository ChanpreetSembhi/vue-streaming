<script setup lang="ts">
import { computed, ref } from 'vue'
import { FilmIcon, HeartIcon } from '@heroicons/vue/24/outline'
import Switch from '@/components/Switch.vue'
import VideoCard from '@/components/VideoCard.vue'
import { video, trending, ForYouVideo, PopularVideo, histories } from '@/stores/data'
import commentPerson from '@/assets/img/channel-profile/icon-3.png'
import commentPersonTwo from '@/assets/img/channel-profile/icon-5.png'
import { useRoute } from 'vue-router'

const subscribe = ref(true)
const like = ref<Record<number, boolean>>({})

type Comments = {
  id: number
  img: string
  name: string
  date: string
  comment: string
  likes: number
}

const comments: Comments[] = [
  {
    id: 1,
    img: commentPerson,
    name: 'Pythan Team',
    date: '5 days ago',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam?',
    likes: 9
  },
  {
    id: 2,
    img: commentPersonTwo,
    name: 'Django',
    date: '10 days ago',
    comment:
      'Molestiae amet cumque vitae tempore esse enim veniam repellendus, aliquid porro ipsum.',
    likes: 12
  }
]

const route = useRoute()
const Id = route.params.id

const Detail = computed(() => {
  return video?.find((videos) => videos.id === Id) ||
  trending?.find((trendings) => trendings.id === Id) ||
  ForYouVideo?.find((forYou) => forYou.id === Id) ||
  PopularVideo?.find((popular) => popular.id === Id) ||
  histories?.find((history) => history.id === Id);
})
</script>
<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 p-5">
    <div class="lg:col-span-3">
      <iframe
        class="w-full aspect-video rounded-lg"
        src="https://www.youtube.com/embed/K_sdFT5s968?si=FuyS_LM5wH23eemc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <!-- Video Name -->
      <div class="py-4">
        <div class="flex flex-col sm:flex-row items-start justify-between gap-2 mb-2">
          <div>
            <h5 class="text-lg font-semibold pb-1">{{ Detail?.title }}</h5>
            <p class="text-gray-500 text-sm">{{ Detail?.views }} views</p>
          </div>
          <div class="flex items-center space-x-3 mt-1">
            <div class="flex items-center space-x-1 cursor-pointer">
              <FilmIcon class="size-4" />
              <p class="text-sm">Save</p>
            </div>
            <div class="flex items-center space-x-1 cursor-pointer">
              <HeartIcon class="size-4" />
              <p class="text-sm">6.5K</p>
            </div>
          </div>
        </div>
      </div>
      <!-- profile name -->
      <div
        class="border bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-md drop-shadow-sm p-4 mb-4"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-3">
            <RouterLink :to="'/subscribed-profile/' + Detail?.id">
              <img :src="Detail?.channelIcon" alt="profile" class="size-10" />
            </RouterLink>
            <div>
              <h5 class="font-semibold">{{ Detail?.channelName }}</h5>
              <p class="text-gray-500 dark:text-gray-400 text-xs">9.77M subscribers</p>
            </div>
          </div>
          <button
            type="button"
            class="border border-indigo-600 hover:text-gray-100 hover:bg-indigo-600 dark:text-gray-100 rounded text-sm px-4 py-1.5 transition ease-in-out delay-150"
            :class="subscribe ? 'bg-indigo-600 !text-gray-100' : 'text-indigo-600'"
            @click="subscribe = !subscribe"
          >
            {{ subscribe ? 'Subscribed' : 'Subscribe' }}
          </button>
        </div>
        <p class="text-gray-600 dark:text-gray-300 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quis. Quo laboriosam
          explicabo nostrum facilis alias aut illum quaerat laborum. Voluptas sed neque ex, ipsa
          itaque dicta exercitationem! Commodi assumenda error ullam eum, fugiat vel pariatur
          voluptatibus neque quia reprehenderit autem, sapiente cupiditate ab sequi! Ex, nostrum
          vitae voluptatem temporibus cupiditate commodi rem eum.
        </p>
      </div>
      <!-- comments -->
      <div class="flex space-x-3 border-b dark:border-gray-700 p-4" v-for="comment in comments">
        <img :src="comment.img" alt="comment" class="h-7 w-7" />
        <div>
          <h5 class="flex items-center gap-2">
            {{ comment.name }} <span class="dark:text-gray-500 text-xs">{{ comment.date }}</span>
          </h5>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ comment.comment }}
          </p>
          <div class="flex items-center space-x-4 mt-4">
            <div
              class="flex items-center gap-1 text-sm cursor-pointer"
              @click="like[comment.id] = !like[comment.id]"
            >
              <HeartIcon
                class="size-5 text-indigo-600"
                :class="like[comment.id] ? 'fill-current' : ''"
              />
              <template v-if="like[comment.id] === true">{{ comment.likes + 1 }}</template>
              <template v-else>{{ comment.likes }}</template>
            </div>
            <a href="#" class="text-sm text-gray-600 dark:text-gray-400">Reply</a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col space-y-4">
      <div
        class="border bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-md flex items-center justify-between p-3"
      >
        <h5>Autoplay</h5>
        <Switch />
      </div>
      <VideoCard :info="videos" v-for="videos in video" :key="videos.id" />
    </div>
  </div>
</template>
