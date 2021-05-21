<template>
  <div class="home">
    Componente home.vue
    <div>A :{{ a }}</div>
    <div style="display: flex; flex-wrap: wrap; justify-content: center;">
      <card title="Produto 1" body="Novo card" @plus-plus="plusHandler"/>
      <card title="Produto 2" body="Novo card" @plus-plus="plusHandler"/>
      <card title="Produto 3" body="Novo card" @plus-plus="plusHandler"/>
      <card title="Produto 4" body="Novo card" @plus-plus="plusHandler"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

import Card from '@/components/Card.vue';

export default defineComponent({
  components: {
    Card,
  },
  setup() {
    const state = reactive({
      a: 0,
    });

    const plusHandler = (value:number) => {
      console.log('plus', value);
      state.a += value;
    };
    return {
      ...toRefs(state),
      plusHandler,
    };
  },
});
</script>
<style scoped>

</style>
