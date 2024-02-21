<template>
  <div class="appContainer" :style="{ backgroundColor: mode ? '#42b883' : '#402a23', color: mode ? '#feffdf' : '#f3bc77' }">
    <div class="headerContainer" :style="{ background: mode ? 'linear-gradient(to right, #42b883, rgb(51, 139, 147), #42b883)' : 'linear-gradient(to right, #402a23, #141010, #402a23'}">   
      <Header v-model:mode="mode" />
    </div>
    <div class="canvasContainer">
      <MainCanvas :mode="mode" :canvasNumber="canvasNumber"/>
    </div>
    <div class="buttonsContainer">
      <h3>Choose your art:</h3>
      <div class="buttons">
        <button @click="changeCanvas(1)" 
        :style="{ backgroundColor: mode ? '#dde0ab' : '#1d1716', color: mode ? '#668ba4' : '#f3bc77', border: mode ? '2px solid #668ba4' : '2px solid #f3bc77' }">
          1
        </button>
        <button @click="changeCanvas(5)"
        :style="{ backgroundColor: mode ? '#dde0ab' : '#1d1716', color: mode ? '#668ba4' : '#f3bc77', border: mode ? '2px solid #668ba4' : '2px solid #f3bc77' }">
          2
        </button>
        <button @click="changeCanvas(3)"
        :style="{ backgroundColor: mode ? '#dde0ab' : '#1d1716', color: mode ? '#668ba4' : '#f3bc77', border: mode ? '2px solid #668ba4' : '2px solid #f3bc77' }">
          3
        </button>
        <button @click="changeCanvas(4)"
        :style="{ backgroundColor: mode ? '#dde0ab' : '#1d1716', color: mode ? '#668ba4' : '#f3bc77', border: mode ? '2px solid #668ba4' : '2px solid #f3bc77' }">
          4
        </button>
        <button @click="changeCanvas(2)"
        :style="{ backgroundColor: mode ? '#dde0ab' : '#1d1716', color: mode ? '#668ba4' : '#f3bc77', border: mode ? '2px solid #668ba4' : '2px solid #f3bc77' }">
          5
        </button>
        <button @click="changeCanvas(6)"
        :style="{ backgroundColor: mode ? '#dde0ab' : '#1d1716', color: mode ? '#668ba4' : '#f3bc77', border: mode ? '2px solid #668ba4' : '2px solid #f3bc77' }">
          6
        </button>
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
 font-family: "Roboto", sans-serif;
 letter-spacing: 1px;
}

.headerContainer{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
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
