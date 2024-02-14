<script setup lang="ts">
import { CreditCardIcon, FilmIcon, WindowIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <div class="mb-5">
    <h4 class="text-2xl font-semibold pb-1">Video element</h4>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Use cards and start end screen to show viewers related videos, website, and calls to action.
      <a href="#" class="text-indigo-500">Learn more</a>
    </p>
  </div>
  <div class="flex flex-col space-y-3">
    <div class="bg-gray-200 dark:bg-gray-800 flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 rounded-md p-4">
      <WindowIcon class="size-10" />
      <div>
        <h6 class="font-semibold">Add subtitle</h6>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Reach a broader audience by adding subtitle to your video
        </p>
      </div>
      <a href="#" class="text-indigo-500 uppercase text-sm md:ml-auto">add</a>
    </div>
    <div class="bg-gray-200 dark:bg-gray-800 flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 rounded-md p-4">
      <FilmIcon class="size-10" />
      <div>
        <h6 class="font-semibold">Add an end screen</h6>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Promote related content at the end of your video
        </p>
      </div>
      <div class="flex items-center gap-3 md:ml-auto">
        <a href="#" class="text-indigo-500 uppercase text-sm">Import form video</a>
        <a href="#" class="text-indigo-500 uppercase text-sm">Add</a>
      </div>
    </div>
    <div class="bg-gray-200 dark:bg-gray-800 flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 rounded-md p-4">
      <CreditCardIcon class="size-10" />
      <div>
        <h6 class="font-semibold">Add cards</h6>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Promote related content during your video
        </p>
      </div>
      <a href="#" class="text-indigo-500 uppercase text-sm md:ml-auto">add</a>
    </div>
  </div>
</template>
