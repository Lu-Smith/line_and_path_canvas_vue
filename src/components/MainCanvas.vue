<template>
    <canvas 
    ref="canvas"
    :style="{ backgroundColor: mode ? 'white' : 'black', border: mode ? '2px solid #feffdf' : '2px solid #1d1716' }"
    ></canvas>
    <ElephantImage id="elephant" />
</template>

<script lang="ts" setup>
    import { ref, onMounted, watch} from 'vue';
    import LineOne from '../assets/LineOne';
    import LineTwo from '../assets/LineTwo';
    import LineThree from '../assets/LineThree';
    import LineFour from '../assets/LineFour';
    import LineFive from '../assets/LineFive';
    import LineSix from '../assets/LineSix';
    import LineIntro from '../assets/LineIntro';
    import ElephantImage from './ElephantImage.vue';

    const props = defineProps<{canvasNumber: number, mode: boolean}>();

    const canvas = ref<HTMLCanvasElement | null>(null);
    type Line = LineOne[] | LineTwo[] | LineThree[] | LineIntro[] | LineFour[] | LineFive[]
    const linesArray = ref<Line>([]);
    const numberOfLine = ref<number>(100);

    watch(() => props.canvasNumber, (newValue) => {
        // const imagePattern = document.getElementById("elephant") as CanvasImageSource;
        linesArray.value = [];
        if (newValue === 1) {
            numberOfLine.value = 140;
        } else if (newValue === 2) {
            numberOfLine.value = 100;
        } else if (newValue === 3) {
            numberOfLine.value = 240;
        } else if (newValue === 4) {
            numberOfLine.value = 80;
        } else if (newValue === 5) {
            numberOfLine.value = 20;
        } else {
            numberOfLine.value = 60;
        }

        if (canvas.value) {
        const ctx = canvas.value.getContext('2d');
        if (ctx) {
            canvas.value.width = window.innerWidth;
            canvas.value.height = window.innerHeight*0.712;
            const imagePattern = document.getElementById("elephant") as CanvasImageSource;

            if(imagePattern && newValue === 1) {
                        const pattern1 = ctx.createPattern(imagePattern, 'repeat');
                        ctx.strokeStyle = pattern1 ?? 'black'; 
                    }
            for (let i = 0; i < numberOfLine.value; i++) {
                if (newValue === 1) {                    
                    //canvas shadows
                    ctx.shadowOffsetX = 2;
                    ctx.shadowOffsetY = 2;
                    ctx.shadowColor = 'white';
                    linesArray.value.push(new LineIntro(canvas.value))
                } else if (newValue === 2) {
                    //canvas shadows
                    ctx.shadowOffsetX = 4;
                    ctx.shadowOffsetY = 3;
                    ctx.shadowColor = '#fcff82';

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
                } else if (newValue === 3) {
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
                } else if (newValue === 4) {
                    //canvas shadows
                    ctx.shadowOffsetX = 2;
                    ctx.shadowOffsetY = 2;
                    ctx.shadowColor = 'black';
                   
                    linesArray.value.push(new LineFour(canvas.value));
                } else if (newValue === 5) {
                    //canvas shadows
                    ctx.shadowOffsetX = 2;
                    ctx.shadowOffsetY = 2;
                    ctx.shadowColor = 'black';
                   
                    linesArray.value.push(new LineFive(canvas.value));
                } else {
                    const gradient3 = ctx.createLinearGradient(0, 0, canvas.value.width, canvas.value.height)
                    gradient3.addColorStop(0.2, 'white');
                    gradient3.addColorStop(0.5, 'red');
                    gradient3.addColorStop(0.8, 'orange');
                    //canvas shadows
                    ctx.shadowOffsetX = 2;
                    ctx.shadowOffsetY = 2;
                    ctx.shadowColor = 'black';
                    ctx.strokeStyle = gradient3;
                    linesArray.value.push(new LineSix(canvas.value));
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
                    const pattern1 = ctx.createPattern(imagePattern, 'repeat');
                    ctx.strokeStyle = pattern1 ?? 'black'; 
                }
            
                for (let i = 0; i < numberOfLine.value; i++) {
                        linesArray.value.push(new LineFive(canvas.value))
                }
                animate(ctx);
            }
        }
    }
   
    onMounted(() => {
        const imagePattern = document.getElementById("elephant") as CanvasImageSource;
        canvasOne(imagePattern);
    });
</script>