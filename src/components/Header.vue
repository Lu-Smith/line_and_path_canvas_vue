<template>
    <div @click="changeMode">
        {{ mode }}
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