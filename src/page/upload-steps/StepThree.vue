<script setup lang="ts">
import { ShieldCheckIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <div class="mb-5">
    <h4 class="text-2xl font-semibold pb-1">Checks</h4>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      We'll check your video for issues that may restrict its visibility and then you will have the
      oppportunity to fix issues before publishing your video.
      <a href="#" class="text-indigo-500">Learn more</a>
    </p>
  </div>
  <div class="bg-gray-200 dark:bg-gray-800 flex items-center justify-between rounded-md p-4 mb-4">
    <div>
      <h6 class="font-semibold">Copyright</h6>
      <p class="text-xs text-gray-500 dark:text-gray-400">No issues found</p>
    </div>
    <ShieldCheckIcon class="h-8 w-8 text-green-500" />
  </div>
  <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
    <p class="text-sm text-gray-500 dark:text-gray-400 md:w-3/4">
      Remember: These checks results aren't final. Issues may come in the future that impact your
      video. <a href="#" class="text-indigo-500">Learn more</a>
    </p>
    <a href="#" class="text-indigo-500 text-sm md:w-auto">Send Feedback</a>
  </div>
</template>
