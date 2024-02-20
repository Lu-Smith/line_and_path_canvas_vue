<template>
    <canvas ref="canvas"></canvas>
</template>

<script lang="ts" setup>
    import { ref, onMounted} from 'vue';
    import LineOne from '../assets/LineOne';

    defineProps<{canvasNumber: number, mode: boolean}>();

    const canvas = ref<HTMLCanvasElement | null>(null);
    const linesArray = ref<LineOne[]>([]);
    const numberOfLine = ref<number>(100);

    const animate = (ctx: CanvasRenderingContext2D) => {
        //clear canvas
        if (canvas.value) {
            ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
        }
        //draw line
        if (ctx) {
        linesArray.value.forEach(line => {
            line.draw(ctx)
            line.update()
            });
        }
        requestAnimationFrame(() => animate(ctx));
    }
   
    onMounted(() => {
        if (canvas.value) {
            const ctx = canvas.value.getContext('2d');
            canvas.value.width = window.innerWidth;
            canvas.value.height = window.innerHeight*0.786;
            for (let i = 0; i < numberOfLine.value; i++) {
                linesArray.value.push(new LineOne(canvas.value))
            }

            // const Line1 = new LineOne(canvas.value);

            if (ctx) {
                // Line1.draw(ctx);
                animate(ctx);
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