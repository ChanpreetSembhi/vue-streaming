<script setup lang="ts">
import { ref, useSlots } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

useSlots()

defineEmits(['close'])
</script>
<template>
  <TransitionRoot appear as="template">
    <Dialog as="div" @click="$emit('close', $event.target.value)" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-6xl transform overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-gray-50 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="div"
                class="flex items-center justify-between border-b border-gray-300 dark:border-gray-500 p-4"
              >
                <h3 class="text-lg font-medium leading-snug"><slot name="header"></slot></h3>
                <a class="cursor-pointer" @click="$emit('close')"><XMarkIcon class="size-6" /></a>
              </DialogTitle>
              <div class="p-4 overflow-y-auto min-h-full max-h-[70dvh]">
                <slot name="body"> </slot>
              </div>

              <div class="flex items-center justify-between border-t border-gray-300 dark:border-gray-500 p-4">
                <slot name="footer"></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
