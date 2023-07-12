<script setup lang="ts">
import { ref } from 'vue';
const open = ref(false);
</script>
<template>
    <button @click="open = true">Open</button>
    <aside class="fixed inset-0 w-96 bg-red-400 transition-all ease-in-out" :class="{ opened: open }">
        <button @click="open = false">Close</button>
        <slot />
    </aside>
</template>
<style lang="scss" scoped>
aside {
    transform: translateX(100% + 360);
}

.opened {
    transform: translateX(100% + 100);
}
</style>