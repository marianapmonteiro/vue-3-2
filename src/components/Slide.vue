<template>
<div></div>
  <!-- <div class="slider">
    <button type="button" class="btn-left">
      <img src="../assets/arrowLeft.svg" @click="setCurrent(1)"   class="arrow" />
    </button>
    <div  class="container-img">
      <img v-if="current === 0"  :src="image[1]"/>
      <img  v-else :src="image[0]" class="img2"/>
    </div>
    <button  @click="setCurrent(0)"  class="btn-right">
      <img src="../assets/arrowRight.svg" @click="setCurrent(0)"   class="arrow" />
    </button>
  </div> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    image: { type: Array, required: true },
  },
  setup(props) {
      // const img1 = '../assets/imgCarousel.png';
      // const img2 = '../assets/imgCarousel2.png';
      // props.image.values[0] = img1;
      // props.image.values[1] = img2;
      // const current = ref(0);
      // const setCurrent = () => {
      //   if (!current.value) {
      //     current.value = 1;
      //     props.image.values[1];
      //   } else {
      //     current.value = 0;
      //     props.image.values[0];
      //   }
      // };

    return {
    //   img1,
    //   img2,
    //  current,
    //  setCurrent,
    };
  },
});

</script>
<style scoped>
.slider{
  display: flex;
  height: 200px;
  width: 100%;
}
.arrow{
  width: 20px;
  height: 20px;
}
.btn-right{
  float: right;
}
.btn-left{
  float: left;
}
.container-img{
  width: fit-content;
  height: fit-content;
}
</style>
