<script setup lang="ts">
import MainCanvas from './components/MainCanvas.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="appContainer">
    <div>   
      <Header />
    </div>
    <div>
      <MainCanvas />
    </div>
    <div>
      <Footer />
    </div>
  </div>
   
</template>

<style scoped>
.appContainer {
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
}
</style>
