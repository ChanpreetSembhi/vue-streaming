<script setup lang="ts">
import VueLogo from '@/assets/img/build-with/vue-js.svg';
import VueUseLogo from '@/assets/img/build-with/vue-use.svg';
import ViteLogo from '@/assets/img/build-with/vite-js.svg';
import TypescriptLogo from '@/assets/img/build-with/typescript.svg';
import TailwindLogo from '@/assets/img/build-with/tailwind-css.svg';
import HeadlessUiLogo from '@/assets/img/build-with/headless-ui.svg';
import HeroiconLogo from '@/assets/img/build-with/heroicons.svg';
</script>
<template>
    <main class="p-5">
        <div class="pb-5 border-b border-gray-300 dark:border-gray-700">
            <div class="mb-5">
                <h4 class="text-xl font-semibold pb-1">Infomation</h4>
                <p class="text-xs text-gray-500">Some Infomation About this and which Language is use in this</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div
                    class="bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm text-center p-5">
                    <img :src="VueLogo" alt="vuejs" class="size-24 mx-auto mb-4">
                    <div>
                        <h5 class="text-xl font-semibold">Vue Js</h5>
                        <a href="https://vuejs.org/" class="text-sm text-indigo-500 hover:text-indigo-600" target="_blank">https://vuejs.org/</a>
                    </div>
                </div>
                <div
                    class="bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm text-center p-5">
                    <img :src="VueUseLogo" alt="vuejs" class="size-24 mx-auto mb-4">
                    <div>
                        <h5 class="text-xl font-semibold">Vue Use</h5>
                        <a href="https://vueuse.org/" class="text-sm text-indigo-500 hover:text-indigo-600" target="_blank">https://vueuse.org/</a>
                    </div>
                </div>
                <div
                    class="bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm text-center p-5">
                    <img :src="TypescriptLogo" alt="vuejs" class="size-24 mx-auto mb-4">
                    <div>
                        <h5 class="text-xl font-semibold">Typescript</h5>
                        <a href="https://www.typescriptlang.org/" class="text-sm text-indigo-500 hover:text-indigo-600" target="_blank">https://vueuse.org/</a>
                    </div>
                </div>
                <div
                    class="bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm text-center p-5">
                    <img :src="ViteLogo" alt="vuejs" class="size-24 mx-auto mb-4">
                    <div>
                        <h5 class="text-xl font-semibold">Vite Js</h5>
                        <a href="https://vitejs.dev/" class="text-sm text-indigo-500 hover:text-indigo-600" target="_blank">https://vitejs.dev/</a>
                    </div>
                </div>
                <div
                    class="bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm text-center p-5">
                    <img :src="TailwindLogo" alt="vuejs" class="size-24 mx-auto mb-4">
                    <div>
                        <h5 class="text-xl font-semibold">Tailwind Css</h5>
                        <a href="https://tailwindcss.com/" class="text-sm text-indigo-500 hover:text-indigo-600" target="_blank">https://tailwindcss.com/</a>
                    </div>
                </div>
                <div
                    class="bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm text-center p-5">
                    <img :src="HeadlessUiLogo" alt="vuejs" class="size-24 mx-auto mb-4">
                    <div>
                        <h5 class="text-xl font-semibold">Headless Ui</h5>
                        <a href="https://headlessui.com/" class="text-sm text-indigo-500 hover:text-indigo-600" target="_blank">https://headlessui.com/</a>
                    </div>
                </div>
                <div
                    class="bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 rounded-lg drop-shadow-sm text-center p-5">
                    <img :src="HeroiconLogo" alt="vuejs" class="size-24 mx-auto mb-4">
                    <div>
                        <h5 class="text-xl font-semibold">HeroIcons</h5>
                        <a href="https://heroicons.com/" class="text-sm text-indigo-500 hover:text-indigo-600" target="_blank">https://heroicons.com/</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>