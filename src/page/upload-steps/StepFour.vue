<script setup lang="ts">
import Radio from '@/components/Radio.vue'
</script>
<template>
  <div class="mb-5">
    <h4 class="text-2xl font-semibold pb-1">Visibility</h4>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Choose when to publish and who can see your video
    </p>
  </div>
  <div class="bg-gray-200 dark:bg-gray-800 flex flex-col space-y-1 rounded-md p-4 mb-4">
    <Radio id="publish" name="publish" label="Save or publish" :checked="true" />
    <div class="ml-6">
      <Radio id="private" name="publishOptions" label="Private" />
      <Radio id="Public" name="publishOptions" label="Public" />
    </div>
  </div>
  <div class="bg-gray-200 dark:bg-gray-800 flex flex-col space-y-1 rounded-md p-4">
    <h6 class="font-semibold pb-2">Before you publish, check the following:</h6>
    <div class="pb-2">
     <h6 class="text-sm pb-0.5">Do Kids appear in the video?</h6>
     <p class=" text-gray-500 dark:text-gray-400 text-xs">Make sure you foloow our policies to protect minor from harm, explotation, bullying, and violation of labor law. <a href="#" class="text-indigo-500">Learn more</a></p>
    </div>
    <div>
     <h6 class="text-sm pb-0.5">Looking for overall content guidance?</h6>
     <p class=" text-gray-500 dark:text-gray-400 text-xs">Our Community Guidelines can help you avoid trouble and ensure that YouTube remains a safe and vibrant community <a href="#" class="text-indigo-500">Learn more</a></p>
    </div>
  </div>
</template>
