<template>
    <canvas ref="canvas"></canvas>
</template>

<script lang="ts" setup>
    defineProps(['mode']);

    import { ref, onMounted } from 'vue';
    import LineOne from '../assets/LineOne';

    const canvas = ref<HTMLCanvasElement | null>(null);
    const linesArray = ref<LineOne[]>([]);
    const numberOfLine = ref<number>(50);
   
    onMounted(() => {
        if (canvas.value) {
            const ctx = canvas.value.getContext('2d');
            canvas.value.width = window.innerWidth;
            canvas.value.height = window.innerHeight*0.786;
            for (let i = 0; i < numberOfLine.value; i++) {
                linesArray.value.push(new LineOne(canvas.value))
            }

            console.log(linesArray.value);
            const Line1 = new LineOne(canvas.value);

            if (ctx) {
                ctx.lineWidth = 20;
                ctx.strokeStyle = 'magenta';
                Line1.draw(ctx);
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