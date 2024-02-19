<template>
    <canvas ref="canvas"></canvas>
</template>

<script lang="ts" setup>
    defineProps(['mode']);

    import { ref, onMounted } from 'vue';

    const canvas = ref<HTMLCanvasElement | null>(null);

    const handleMouseDown = () => {}

    onMounted(() => {
        window.addEventListener("mousedown", handleMouseDown);
    });
</script>

<style scoped>
    .canvas{
        border: 10px solid red;
        width: 100%;
        height: 100%;
    }
</style>