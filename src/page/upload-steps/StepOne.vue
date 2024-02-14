<script setup lang="ts">
import { PlusCircleIcon } from '@heroicons/vue/24/outline'
import InputField from '@/components/InputField.vue'
import Radio from '@/components/Radio.vue'
import ThumbnailOne from '@/assets/img/thumbnail/thumbnail-1.jpg'
import ThumbnailTwo from '@/assets/img/thumbnail/thumbnail-2.jpg'
import ThumbnailThree from '@/assets/img/thumbnail/thumbnail-3.jpg'
import { ref } from 'vue'

const name = ref('')
const description = ref('')
</script>
<template>
  <div class="mb-6">
    <h4 class="text-2xl font-semibold pb-2">Details</h4>
    <div class="bg-gray-200 dark:bg-gray-800 rounded-md p-4">
      <InputField id="name" label="Title" type="text" v-model="name" class="mb-4" />
      <InputField id="description" label="Description" type="text" v-model="description" />
    </div>
  </div>
  <!-- Thumbnails -->
  <div>
    <div class="mb-4">
      <h5 class="text-xl font-semibold pb-1">Thumbnails</h5>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Select or upload a picture thta shows what's in your video. A good thumbnail stands out and
        draws viewers' attention. <a href="#" class="text-indigo-500">Learn More</a>
      </p>
    </div>
    <div class="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-6">
      <label
        class="border-2 border-dashed border-gray-400 rounded-md aspect-video flex items-center justify-center cursor-pointer h-full w-full"
      >
        <PlusCircleIcon class="h-8 w-8 text-gray-400" />
        <input type="file" class="hidden" />
      </label>
      <img :src="ThumbnailOne" alt="thumbnail" class="aspect-video rounded-md h-full w-full" />
      <img :src="ThumbnailTwo" alt="thumbnail" class="aspect-video rounded-md h-full w-full" />
      <img :src="ThumbnailThree" alt="thumbnail" class="aspect-video rounded-md h-full w-full" />
    </div>
    <!-- Audience -->
    <div>
      <div class="mb-3">
        <h5 class="text-xl font-semibold pb-1">Audience</h5>
        <h6 class="text-gray-700 dark:text-gray-200">Is this video made for kids? (required)</h6>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Regardless of your location, you're legally required to comply with the Children's Online
          Privacy Protection Act (COPPA) and/or other laws. You're required to tell us wheather your
          videos are made for kids.
          <a href="#" class="text-indigo-500">What's content made for kids?</a>
        </p>
      </div>
      <div class="flex flex-col space-y-1">
        <Radio id="for_kids" name="kids" label="Yes, it's made for kids" />
        <Radio id="not_for_kids" name="kids" label="No, its's not made for kids" />
      </div>
    </div>
  </div>
</template>
