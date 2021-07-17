<template>
  <div class="home">
    <div class="productLabel">Produtos disponíveis:</div>
    <div class="categories">
      <div class="filter">
        <img class="filterimg" src="../assets/filter.svg" />
         <div class="filterLabel">Filtrar por categoria:</div>
      </div>
      <select class="select" v-model="category" @change="categoryHandler">
        <option v-for="cat in categories" :key="cat" :value="cat">{{cat}}</option>
      </select>
    </div>
    <!-- {{products}} -->
    <div style="display: flex; flex-wrap: wrap; flex-position: center;">
      <div v-for="p in products" :key="p.id">
        <card
          :products="p"
          :title="p.title"
          :body="p.description"
          :categories="p.category"
          :images="p.image"
          :price="p.price"
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, reactive, toRefs, ref
   } from "vue";
import Card from "@/components/Card.vue";
import useCards, { Product } from "@/modules/cards";
import Modal from "@/components/Modal.vue";

export default defineComponent({
  components: {
    Card
  },
  setup() {
    const category = ref();
    const cards = useCards();
    const myProducts = computed(() => cards.state.myProducts);
    cards.actions.loadProducts();
    const categories = computed(() => cards.state.categories);

    const products = computed(() => {
      if (category.value) {
        return cards.state.products.filter(p => p.category === category.value);
      }
      return cards.state.products;
    });

    const categoryHandler = (e: Event) => {
      const target = e.target as HTMLInputElement;
      console.log(target.value);
    };
    return {
      products,
      myProducts,
      categories,
      categoryHandler,
      category
    };
  }
});
</script>
<style scoped>
.productLabel {
  color: #6666cc;
  display: flex;
  justify-content: left;
  padding-bottom: 30px;
  padding-top: 30px;
  font-weight: bolder;
  margin-left: auto;
}
.categories {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}
.filterLabel {
  height: 4px;
  width: 100px;
  font-weight: bolder;
  color: #ffbf80;
}
.select {
  padding: 10px;
  height: 20px;
  width: 140px;
}
.underline {
  color: #ffbf80;
  font-weight: bolder;
  padding: 4px;
  width: 10px;
}
.filter{
  display: flex;
  padding-bottom: 20px;
  width: 100px;
}
</style>
