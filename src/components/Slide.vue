<template>
<div class="slidercontainer">
        <div class="buttonright"  @click="setCurrent(-1)"></div>
        <img class="slider" v-if="current === 0" :src="image[0]" />
        <img class="slider" v-else :src="image[1]"/>
        <div class="buttonleft" @click="setCurrent(1)"></div>
</div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    image: { type: Array, required: true },
  },
  setup(props) {

   const current = ref(0);

   const setCurrent = () => {
     if (!current.value) {
        current.value = 1;
     } else {
       current.value = 0;
     }
   };

    return {
      current,
      setCurrent,
    };
  },
});

</script>
<style scoped>
 .slider {
  position: relative;
  width: 100%;
  height: 300px;
}
.slidercontainer{
  padding: 10px;
  position: relative;
  transition: all 0.3 ease-in-out;
}
.buttonright{
    position: absolute;
    background:url('../assets/arrowRight.svg') center center no-repeat;
    background-size: 60%;
    height: 100%;
    width: 100px;
    right: 0;
    top: 0;
    z-index: 10;
    cursor: pointer;
    /* top: 0;
    left: 0; */
}
.buttonleft{
    position: absolute;
    background:url('../assets/arrowLeft.svg') center center no-repeat;
    background-size: 60%;
    height: 100%;
    width: 100px;
    left: 0;
    top: 0;
    z-index: 10;
    cursor: pointer;
}
</style>
