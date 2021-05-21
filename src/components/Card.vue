<template>
    <div class="card">
        <div>
          {{a}}
          <button @click="clickHandler">++</button>
        </div>
        <div class="title">
            {{ title }}
        </div>
        <div>
            {{ body }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    title: { type: String, default: ' ' },
    body: { type: String, default: ' ' },
  },
  setup() {
    const a = ref(0);

    const clickHandler = () => {
      console.log(a.value);
      a.value++;
    };
    return {
      a,
      clickHandler,
    };
  },
});
</script>

<style scoped>
.card{
border:1px solid black;
padding:5px;
margin:5px;
height: 200px;
width: 200px;
}
.title{
  border-bottom: 1px solid black;
}
</style>
