<template>
  <div class="appContainer">
    <div class="headerContainer">   
      <Header v-model:mode="mode" />
    </div>
    <div class="canvasContainer">
      <MainCanvas :mode="mode" :canvasNumber="canvasNumber"/>
    </div>
    <div class="buttonsContainer">
      <h3>Choose your art:</h3>
      <div class="buttons">
        <button @click="changeCanvas(1)">1</button>
        <button @click="changeCanvas(2)">2</button>
        <button @click="changeCanvas(3)">3</button>
      </div>
    </div>
    <div class="footerContainer">
      <Footer :mode="mode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainCanvas from './components/MainCanvas.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

const mode = ref(false);

const canvasNumber = ref(1);

const changeCanvas = (buttonNumber: number) => {
  canvasNumber.value = buttonNumber;
}

</script>



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

.buttonsContainer{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
}

.buttons {
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
}

.footerContainer{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
