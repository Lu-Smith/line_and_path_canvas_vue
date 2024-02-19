<template>
    <canvas ref="canvas"></canvas>
</template>

<script lang="ts" setup>
    defineProps(['mode']);

    import { ref, onMounted } from 'vue';

    const canvas = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
        if (canvas.value) {
            const ctx = canvas.value.getContext('2d');
            canvas.value.width = window.innerWidth;
            canvas.value.height = window.innerHeight*0.786;
            console.log(ctx);

            if (ctx) {
                ctx.lineWidth = 20;
                ctx.strokeStyle = 'magenta';
            }
        }
    });
</script>

<style scoped>
    canvas {
        border: 5px solid red;
        background-color: antiquewhite;
    }
</style>