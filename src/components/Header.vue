<template>
    <div @click="changeMode">
        <div v-if="mode === 'light'" class="header">
            <span  class="material-symbols-outlined switch">
            toggle_off
            </span>
            <span class="material-symbols-outlined">
            emoji_objects
            </span>
        </div>
        <div v-if="mode === 'dark'" class="header">
            <span  class="material-symbols-outlined switch">
            toggle_on
            </span>
            <span class="material-symbols-outlined">
            nightlight
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const mode = ref('light');

const changeMode = () => {
    if (mode.value === 'dark') {
        mode.value = 'light';
    } else {
        mode.value = 'dark';
    }
}
</script>

<style scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
    .switch {
        font-size: 2.2rem;
    }
</style>
