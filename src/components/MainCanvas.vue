<template>
    <canvas ref="canvas"></canvas>
</template>

<script lang="ts" setup>
    import { ref, onMounted, watch} from 'vue';
    import LineOne from '../assets/LineOne';
    import LineTwo from '../assets/LineTwo';
    import LineThree from '../assets/LineThree';

    const props = defineProps<{canvasNumber: number, mode: boolean}>();

    const canvas = ref<HTMLCanvasElement | null>(null);
    type Line = LineOne[] | LineTwo[] | LineThree[]
    const linesArray = ref<Line>([]);
    const numberOfLine = ref<number>(100);

    watch(() => props.canvasNumber, (newValue) => {
        linesArray.value = [];
        if (newValue === 1) {
            numberOfLine.value = 100;
        } else if (newValue === 2) {
            numberOfLine.value = 1;
        } else {
            numberOfLine.value = 10;
        }
        if (canvas.value) {
        const ctx = canvas.value.getContext('2d');
        if (ctx) {
            canvas.value.width = window.innerWidth;
            canvas.value.height = window.innerHeight * 0.786;
            console.log(numberOfLine.value);
            for (let i = 0; i < numberOfLine.value; i++) {
                // Push instances of specific line types based on props.canvasNumber
                if (newValue === 1) {
                    linesArray.value.push(new LineOne(canvas.value))
                } else if (newValue === 2) {
                    linesArray.value.push(new LineTwo(canvas.value))
                } else {
                    linesArray.value.push(new LineThree(canvas.value))
                }
            }
            animate(ctx);
        }
    }
    });


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
            if (ctx) {
            canvas.value.width = window.innerWidth;
            canvas.value.height = window.innerHeight*0.786;
            for (let i = 0; i < numberOfLine.value; i++) {
                    linesArray.value.push(new LineOne(canvas.value))
            }
            // const Line1 = new LineOne(canvas.value);
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