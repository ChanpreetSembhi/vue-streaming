<script setup lang="ts">
import { ref } from 'vue'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@headlessui/vue'
import {
  ArrowRightOnRectangleIcon,
  BellAlertIcon,
  Cog6ToothIcon,
  PlusCircleIcon,
  UserCircleIcon,
  Square2StackIcon
} from '@heroicons/vue/24/outline'
import DarkModeToggle from './DarkModeToggle.vue'
import Modal from '@/components/Modal.vue'
import Logo from '@/assets/img/logo.svg'
import Profile from '@/assets/img/profile.png'
import notificationProfile from '@/assets/img/channel-profile/icon-4.png'
import notificationProfileTwo from '@/assets/img/channel-profile/icon-7.png'
import notificationProfileThree from '@/assets/img/channel-profile/icon-12.png'
import StepOne from '@/page/upload-steps/StepOne.vue'
import StepTwo from '@/page/upload-steps/StepTwo.vue'
import StepThree from '@/page/upload-steps/StepThree.vue'
import StepFour from '@/page/upload-steps/StepFour.vue'

// modal
const isOpen = ref(false)
function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}

// youtube link copy
const link = ref('https://youtu.be/KMxo3T_MTvY?si=i_2FX8PZdc80Wnj0')
const copyLink = (toCopy: string) => {
  navigator.clipboard.writeText(toCopy)
}

const selectedTab = ref(0)

function changeTab(index: number) {
  selectedTab.value = index
}
</script>
<template>
  <div
    class="flex flex-col-reverse md:flex-row gap-3 items-center justify-between px-5 py-3 border-b border-gray-300 dark:border-b-gray-700"
  >
    <input
      type="text"
      class="w-full md:w-80 py-1.5 px-3 rounded-md text-sm text-gray-800 dark:text-white bg-transparent border border-gray-400 dark:border-gray-400 dark:bg-gray-900 focus:outline-none focus:border-red-600"
      placeholder="Type to search"
    />
    <div class="flex items-center justify-between w-full md:w-auto">
      <img :src="Logo" alt="logo" class="h-6 w-auto md:hidden" />
      <div class="flex items-center space-x-3">
        <a
          href="#"
          @click="openModal"
          class="flex items-center justify-center p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-500 hover:text-gray-100 dark:text-gray-100 dark:hover:text-gray-800 dark:hover:bg-gray-100"
          ><PlusCircleIcon class="size-4" />
        </a>
        <!-- Notification -->
        <Menu as="div" class="relative">
          <MenuButton
            class="flex items-center justify-center p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-500 hover:text-gray-100 dark:text-gray-100 dark:hover:text-gray-800 dark:hover:bg-gray-100"
          >
            <BellAlertIcon class="size-4" />
          </MenuButton>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute -right-20 sm:right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg w-80 mt-2 p-2.5 z-50 outline-none"
            >
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="#"
                  :class="[
                    active
                      ? 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100'
                      : 'text-gray-700 dark:text-gray-100 hover:text-gray-700',
                    'group flex w-full items-center gap-3 rounded-md p-2 text-sm'
                  ]"
                >
                  <img :src="notificationProfile" alt="profile" class="size-10" />
                  <h6 class="font-semibold">
                    Vue Master <span class="text-gray-500 font-normal">Upload a new video</span>
                  </h6>
                  <div class="h-2 w-2 bg-green-500 rounded-full shrink-0 ml-auto"></div>
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="#"
                  :class="[
                    active
                      ? 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100'
                      : 'text-gray-700 dark:text-gray-100 hover:text-gray-700',
                    'group flex w-full items-center gap-3 rounded-md p-2 text-sm'
                  ]"
                >
                  <img :src="notificationProfileTwo" alt="profile" class="size-10" />
                  <h6 class="font-semibold">
                    Pythan Guru <span class="text-gray-500 font-normal">Upload a new video</span>
                  </h6>
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="#"
                  :class="[
                    active
                      ? 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100'
                      : 'text-gray-700 dark:text-gray-100 hover:text-gray-700',
                    'group flex w-full items-center gap-3 rounded-md p-2 text-sm'
                  ]"
                >
                  <img :src="notificationProfileThree" alt="profile" class="size-10" />
                  <h6 class="font-semibold">
                    Css Class <span class="text-gray-500 font-normal">Upload a new video</span>
                  </h6>
                </RouterLink>
              </MenuItem>
              <MenuItem as="div" class="text-center w-full pt-1">
                <RouterLink to="#" class="text-sm dark:text-gray-400 text-gray-600 p-2"
                  >View All Notifications</RouterLink
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
        <a
          href="#"
          class="flex items-center justify-center focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-500 hover:text-gray-100 dark:text-gray-100 dark:hover:text-gray-800 dark:hover:bg-gray-100"
          ><DarkModeToggle />
        </a>
        <!-- Dropdown -->
        <Menu as="div" class="relative">
          <MenuButton class="h-8 w-8 rounded-full">
            <img :src="Profile" alt="profile" class="h-full w-full" />
          </MenuButton>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg w-48 mt-2 p-2.5 z-50 outline-none"
            >
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="#"
                  :class="[
                    active
                      ? 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100'
                      : 'text-gray-700 dark:text-gray-100',
                    'group flex w-full items-center rounded-md p-2 text-sm'
                  ]"
                  ><UserCircleIcon class="size-5 mr-2" />Profile</RouterLink
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="/settings"
                  :class="[
                    active
                      ? 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100'
                      : 'text-gray-700 dark:text-gray-100',
                    'group flex w-full items-center rounded-md p-2 text-sm'
                  ]"
                  ><Cog6ToothIcon class="size-5 mr-2" />Settings</RouterLink
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="/"
                  :class="[
                    active
                      ? 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100'
                      : 'text-gray-700 dark:text-gray-100',
                    'group flex w-full items-center rounded-md p-2 text-sm'
                  ]"
                  ><ArrowRightOnRectangleIcon class="size-5 mr-2" />Sign out</RouterLink
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>

  <!-- Upload Modal -->
  <Modal :show="isOpen" @close="closeModal">
    <template #header>Upload</template>
    <template #body>
      <TabGroup :selectedIndex="selectedTab" @change="changeTab">
        <TabList class="flex items-center justify-between">
          <Tab as="template" v-slot="{ selected }" v-for="n in 4">
            <button
              :class="[
                'rounded-full h-8 w-8 ',
                selected
                  ? 'bg-indigo-600 text-gray-100'
                  : 'text-gray-600 bg-gray-300 hover:bg-gray-500 dark:text-gray-300 dark:bg-gray-800 hover:text-white'
              ]"
            >
              {{ n }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-4">
          <div class="lg:col-span-2 col-span-1 order-2 lg:order-1">
            <TabPanel><StepOne /></TabPanel>
            <TabPanel><StepTwo /></TabPanel>
            <TabPanel><StepThree /></TabPanel>
            <TabPanel><StepFour /></TabPanel>
          </div>
          <div class="mt-4 order-1 lg:order-2">
            <div class="bg-gray-200 dark:bg-gray-800 rounded-lg drop-shadow-sm overflow-hidden">
              <iframe
                class="aspect-video h-full w-full"
                src="https://www.youtube.com/embed/KMxo3T_MTvY?si=y9S4nSIdWO1_IEh9"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div class="flex flex-col divide-y dark:divide-gray-600 p-4">
                <div class="flex items-center gap-2 pb-3">
                  <div>
                    <h6 class="font-semibold">Video Link</h6>
                    <a
                      href="https://youtu.be/KMxo3T_MTvY?si=i_2FX8PZdc80Wnj0"
                      class="text-indigo-500 hover:text-indigo-600"
                      ><p class="text-xs">{{ link }}</p></a
                    >
                  </div>
                  <a href="#" class="ml-auto" @click="copyLink(link)"
                    ><Square2StackIcon class="h-7 w-7"
                  /></a>
                </div>
                <div class="pt-3">
                  <h6 class="font-semibold">File name</h6>
                  <p class="text-sm text-gray-500 dark:text-gray-400">VS Code Intro.mp4</p>
                </div>
              </div>
            </div>
          </div>
        </TabPanels>
      </TabGroup>
    </template>
    <template #footer>
      <div>
        <button
          type="button"
          @click="selectedTab--"
          v-if="selectedTab >= 1"
          class="bg-gray-600 hover:bg-gray-500 text-gray-100 rounded text-sm py-1.5 px-4 transition ease-in-out delay-150"
        >
          Back
        </button>
      </div>
      <div>
        <button
        type="button"
        v-if="selectedTab <= 2"
        @click="selectedTab++"
        class="bg-indigo-600 hover:bg-indigo-500 text-gray-100 rounded text-sm py-1.5 px-4 transition ease-in-out delay-150"
        >
        Next
      </button>
      <button
        type="button"
        v-else @click="closeModal"
        class="bg-red-600 hover:bg-red-500 text-gray-100 rounded text-sm py-1.5 px-4 transition ease-in-out delay-150"
      >
        Close
      </button>
      </div>
    </template>
  </Modal>
</template>
