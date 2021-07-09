<template>
  <div>
    Meus produtos:
  </div>
        <!-- {{products}} -->
    <div style="display: flex; flex-wrap: wrap; flex-position: center;">
      <div v-for="p in myProducts" :key="p.id">
        <card :products="p"
        :title="p.title" :body="p.description" :categories="p.category" :images="p.image"
        :price="p.price" checkout/>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Card from '@/components/Card.vue';
import useCards, { Product } from '@/modules/cards';

export default defineComponent({
  props: {
    checkout: Boolean,
    products: { type: Object, required: true },
    title: { type: String, default: ' ' },
    body: { type: String, default: ' ' },
    categories: { type: String, default: ' ' },
    images: { type: String, default: ' ' },
    price: { type: Number, default: 0 },
  },
  components: {
    Card,
 },
  setup() {
    const cards = useCards();
    const myProducts = computed(() => cards.state.myProducts);
    cards.actions.loadProducts();
    cards.actions.loadMyproduct();
    return {
      myProducts,
      cards,
    };
  },
});
</script>

<style scoped>
</style>
