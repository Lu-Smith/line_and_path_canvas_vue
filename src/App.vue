<script setup lang="ts">
import { ref } from 'vue';
import MainCanvas from './components/MainCanvas.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

const mode = ref(false);

</script>

<template>
  <div class="appContainer">
    <div class="buttonContainer">
      <h3>Choose your art:</h3>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
    <div class="headerContainer">   
      <Header v-model:mode="mode" />
    </div>
    <div class="canvasContainer">
      <MainCanvas :mode="mode" />
    </div>
    <div class="footerContainer">
      <Footer :mode="mode" />
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
  width: 100%;
  height: 100%;
  background-color: green;
  overflow: hidden;
}

.footerContainer{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
