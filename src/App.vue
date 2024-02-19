<script setup lang="ts">
import MainCanvas from './components/MainCanvas.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="appContainer">
    <div class="headerContainer">   
      <Header />
    </div>
    <div class="canvasContainer">
      <MainCanvas />
    </div>
    <div class="footerContainer">
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
 height: 100vh;
 width: 100vw;
}

.headerContainer{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.canvasContainer{
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footerContainer{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
