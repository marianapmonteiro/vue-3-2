<template>
  <div class="home">
    Componente home.vue
    <div style="display: flex; flex-wrap: wrap; justify-content: center;">
      <card title="Produto 1" body="Novo card"/>
      <card title="Produto 2" body="Novo card"/>
      <card title="Produto 3" body="Novo card"/>
      <card title="Produto 4" body="Novo card"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Card from '@/components/Card.vue';

export default defineComponent({
  components: {
    Card,
  },
});
</script>
<style scoped>

</style>
