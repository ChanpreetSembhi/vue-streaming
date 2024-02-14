import { defineStore } from "pinia";
import { ref } from "vue";

export const toggleState = defineStore('toggleBtn', () => {
    const subscribe = ref<Record<number, boolean>>({})
    const notification = ref(false)
    return { subscribe, notification }
})