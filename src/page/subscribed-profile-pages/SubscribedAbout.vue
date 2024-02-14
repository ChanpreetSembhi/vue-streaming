<script setup lang="ts">
import { ArrowTrendingUpIcon, GlobeAmericasIcon, InformationCircleIcon, UserIcon, VideoCameraIcon } from '@heroicons/vue/24/outline'
import YoutubeLogo from '@/assets/img/social-media/youtube.png'
import InstrgramLogo from '@/assets/img/social-media/instagram.png'
import TwitterLogo from '@/assets/img/social-media/twitter.png'
import FacebookLogo from '@/assets/img/social-media/facebook.png'

type Links = {
  logo: string
  name: string
  link: string
}

const links: Links[] = [
  {
    logo: YoutubeLogo,
    name: 'Youtube',
    link: 'https://www.youtube.com/@Google'
  },
  {
    logo: InstrgramLogo,
    name: 'Instgram',
    link: 'https://www.instagram.com/google/'
  },
  {
    logo: FacebookLogo,
    name: 'Facebook',
    link: 'https://www.facebook.com/Google/'
  },
  {
    logo: TwitterLogo,
    name: 'Twitter',
    link: 'https://twitter.com/googleindia?lang=en'
  }
]
</script>
<template>
  <div class="border-b border-gray-300 dark:border-gray-700 pb-4">
    <h4 class="text-xl font-semibold pb-2">About</h4>
    <p class="text-sm text-gray-500 pb-1.5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quibusdam.
    </p>
    <p class="text-sm text-gray-500 pb-1.5">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, iste quod? Repudiandae ipsum
      aliquid amet, adipisci tenetur, voluptates temporibus quam omnis tempora dolorem doloremque,
      neque perferendis eum cum accusamus et!
    </p>
    <p class="text-sm text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam earum nobis sunt
      non dolor labore rem facere, cum odit.
    </p>
  </div>
  <div class="border-b border-gray-300 dark:border-gray-700 py-4">
    <h4 class="text-xl font-semibold pb-3">Links</h4>
    <div class="flex flex-col space-y-5">
      <div class="flex items-center gap-2" v-for="link in links">
        <img :src="link.logo" alt="youtube" class="size-10" />
        <div>
          <h6 class="font-semibold leading-4">{{ link.name }}</h6>
          <a :href="link.link" class="text-xs text-blue-600 hover:text-blue-500" target="_blank"
            >{{ link.link }}
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-4">
    <h4 class="text-xl font-semibold pb-3">Channels Details</h4>
    <div class="flex flex-col space-y-5">
      <div class="flex items-center gap-2">
        <UserIcon class="size-5" />
        <h6 class="text-sm text-gray-500">1.13 M Subscribers</h6>
      </div>
      <div class="flex items-center gap-2">
        <VideoCameraIcon class="size-5" />
        <h6 class="text-sm text-gray-500">174 Videos</h6>
      </div>
      <div class="flex items-center gap-2">
        <ArrowTrendingUpIcon class="size-5" />
        <h6 class="text-sm text-gray-500">20.35M Views</h6>
      </div>
      <div class="flex items-center gap-2">
        <InformationCircleIcon class="size-5" />
        <h6 class="text-sm text-gray-500">7 May 2024 Joined</h6>
      </div>
      <div class="flex items-center gap-2">
        <GlobeAmericasIcon class="size-5" />
        <h6 class="text-sm text-gray-500">America</h6>
      </div>
    </div>
  </div>
</template>
