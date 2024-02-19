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
        if (canvas.value) {
        const ctx = canvas.value.getContext('2d');
        canvas.value.width = window.innerWidth;
        canvas.value.height = window.innerHeight*0.8;
        console.log(ctx);
    }
    });
</script>

<style scoped>
    .canvas{
        border: 10px solid red;
        background-color: antiquewhite;
    }
</style>