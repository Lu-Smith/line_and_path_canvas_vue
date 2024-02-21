<template>
    <div @click="changeMode">
        <div v-if="mode" class="header" >
            <span  class="material-symbols-outlined switch" :style="{ color: '#dde0ab'}">
            toggle_off
            </span>
            <span class="material-symbols-outlined" :style="{ color: '#feffdf'}">
            emoji_objects
            </span>
        </div>
        <div v-else class="header">
            <span  class="material-symbols-outlined switch" :style="{ color: '#7dd87d'}">
            toggle_on
            </span>
            <span class="material-symbols-outlined" :style="{ color: '#f3bc77'}">
            nightlight
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps(['mode']);
const emits = defineEmits();

const changeMode = () => {
emits('update:mode', !props.mode);
};


</script>

<style scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
    .switch {
        font-size: 2.2rem;
    }
</style>
