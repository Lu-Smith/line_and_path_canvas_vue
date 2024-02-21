<template>
    <canvas ref="canvas"></canvas>
    <ElephantImage id="elephant" />
</template>

<script lang="ts" setup>
    import { ref, onMounted, watch} from 'vue';
    import LineOne from '../assets/LineOne';
    import LineTwo from '../assets/LineTwo';
    import LineThree from '../assets/LineThree';
    import LineIntro from '../assets/LineIntro';
    import ElephantImage from './ElephantImage.vue';

    const props = defineProps<{canvasNumber: number, mode: boolean}>();

    const canvas = ref<HTMLCanvasElement | null>(null);
    type Line = LineOne[] | LineTwo[] | LineThree[] | LineIntro[]
    const linesArray = ref<Line>([]);
    const numberOfLine = ref<number>(100);

    watch(() => props.canvasNumber, (newValue) => {
        // const imagePattern = document.getElementById("elephant") as CanvasImageSource;
        linesArray.value = [];
        if (newValue === 1) {
            numberOfLine.value = 300;
        } else if (newValue === 2) {
            numberOfLine.value = 100;
        } else {
            numberOfLine.value = 240;
        }

        if (canvas.value) {
        const ctx = canvas.value.getContext('2d');
        if (ctx) {
            canvas.value.width = window.innerWidth;
            canvas.value.height = window.innerHeight*0.712;
 
            for (let i = 0; i < numberOfLine.value; i++) {
                if (newValue === 1) {
                    
                    //canvas shadows
                    ctx.shadowOffsetX = 2;
                    ctx.shadowOffsetY = 2;
                    ctx.shadowColor = 'red';

                    const gradient1 = ctx.createLinearGradient(0, 0, canvas.value.width, canvas.value.height)
                    gradient1.addColorStop(0.2, 'pink');
                    gradient1.addColorStop(0.3, 'red');
                    gradient1.addColorStop(0.4, 'orange');
                    gradient1.addColorStop(0.5, 'yellow');
                    gradient1.addColorStop(0.6, 'green');
                    gradient1.addColorStop(0.7, 'blue');
                    gradient1.addColorStop(0.8, 'violet');
                    ctx.strokeStyle = gradient1;
                   
                    linesArray.value.push(new LineOne(canvas.value));
                } else if (newValue === 2) {
                    const gradient1 = ctx.createLinearGradient(0, 0, canvas.value.width, canvas.value.height)
                    gradient1.addColorStop(0.2, 'pink');
                    gradient1.addColorStop(0.3, 'red');
                    gradient1.addColorStop(0.4, 'orange');
                    gradient1.addColorStop(0.5, 'yellow');
                    gradient1.addColorStop(0.6, 'green');
                    gradient1.addColorStop(0.7, 'blue');
                    gradient1.addColorStop(0.8, 'violet');
                    ctx.strokeStyle = gradient1;
                   
                    linesArray.value.push(new LineTwo(canvas.value));
                    
                } else {
                    const gradient2 = ctx.createRadialGradient(canvas.value.width * 0.5, canvas.value.height * 0.5, 
                    10, canvas.value.width * 0.5, canvas.value.height * 0.5, 350);
                    gradient2.addColorStop(0.22, 'blue');
                    gradient2.addColorStop(0.3, 'black');
                    gradient2.addColorStop(0.4, 'green');
                    gradient2.addColorStop(0.6, 'blue');
                    gradient2.addColorStop(0.72, 'yellow');
                    gradient2.addColorStop(0.95, 'blue');
                    gradient2.addColorStop(0.98, 'yellow');
                    gradient2.addColorStop(0.99, 'blue');
                    ctx.strokeStyle = gradient2;
                    linesArray.value.push(new LineThree(canvas.value));
                }
            }
            animate(ctx);
        }}
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
    
    const canvasOne = (imagePattern: CanvasImageSource) => {
        if (canvas.value) {
            const ctx = canvas.value.getContext('2d');
            if (ctx) {
                canvas.value.width = window.innerWidth;
                canvas.value.height = window.innerHeight*0.712;

                //canvas shadows
                ctx.shadowOffsetX = 2;
                ctx.shadowOffsetY = 2;
                ctx.shadowColor = 'black';
        
                if(imagePattern) {
                    ctx.translate(canvas.value.width/2-300, 45);
                    const pattern1 = ctx.createPattern(imagePattern, 'no-repeat');
                    ctx.strokeStyle = pattern1 ?? 'black'; 
                }
            
                for (let i = 0; i < numberOfLine.value; i++) {
                        linesArray.value.push(new LineIntro(canvas.value))
                }
                animate(ctx);
            }
        }
    }
   
    onMounted(() => {
        const imagePattern = document.getElementById("elephant") as CanvasImageSource;
        console.log(imagePattern);
        canvasOne(imagePattern);
    });
</script>

<style scoped>
    canvas {
        border: 5px solid red;
        background-color: rgb(44, 44, 44);
    }
</style>