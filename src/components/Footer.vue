<template>
    <h3>
        Coded by 
        <a 
        href="https://www.lunasmithart.com/"
        target="_blank"
        :style="{ color: mode ? '#feffdf' : '#f3bc77' }">
        Luna Smith</a> -
        <a 
        href="https://github.com/Lu-Smith/line_and_path_canvas_vue" 
        target="_blank"
        :style="{ color: mode ? '#feffdf' : '#f3bc77' }">
        GitHub</a>.
    </h3>
</template>

<script lang="ts" setup>
    defineProps(['mode']);
</script>
