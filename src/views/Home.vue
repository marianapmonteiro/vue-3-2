<template>
  <div class="home">
     <div class="productLabel">Produtos disponíveis:</div>
     {{categories}}
     <!-- {{products}} -->
    <div style="display: flex; flex-wrap: wrap; flex-position: center;">
      <div v-for="p in products" :key="p.id">
        <card :products="p"
         :title="p.title" :body="p.description" :categories="p.category" :images="p.image"
        :price="p.price" />
      </div>
      </div>
        <div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, reactive, toRefs,
} from 'vue';
import Card from '@/components/Card.vue';
import useCards, { Product } from '@/modules/cards';

export default defineComponent({
  components: {
    Card,
  },
  setup() {
    const cards = useCards();
    const state = reactive({
      a: 0,
    });
    const products = computed(() => cards.state.products);
    const myProducts = computed(() => cards.state.myProducts);
    cards.actions.loadProducts();
    const categories = computed(() => cards.state.categories);
    return {
      ...toRefs(state),
      products,
      myProducts,
    };
  },
});
</script>
<style scoped>
.productLabel{
  padding: 30px;
  font-weight: bolder;
  margin-left: auto;
}
</style>
