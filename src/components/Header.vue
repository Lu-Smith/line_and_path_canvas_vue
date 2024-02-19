<template>
    <div>
        {{ mode }}
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const mode = ref('light');
</script>