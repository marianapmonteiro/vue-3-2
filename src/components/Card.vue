<template>
  <div class="card">
    <div class="title">
      {{ title }}
    </div>
    <div>
      <img class="img" :src="images" />
    </div>
    <div class="body">
      {{ body }}
    </div>
    <div class="price">R$ {{ price }}</div>
    <div class="containerCategories">
      <div class="categories">
        {{ categories }}
      </div>
      <div class="categoriesIcon">
        <img v-if="categories === 'jewelery'" src="@/assets/jewel.svg" />
        <img v-if="categories === `men's clothing`" src="@/assets/clothing.svg" />
        <img v-if="categories === `women's clothing`" src="@/assets/clothing.svg" />
        <img v-if="categories === 'electronics'" src="@/assets/eletronics.svg" />
      </div>
    </div>
    <div class="containerModal">
      <div v-if="!checkout" @click="modalOpen = true">
      <button class="button">Adicionar ao carrinho</button>
      </div>
        <div v-else @click="modalBuyOpen = true">
          <button class="button">Comprar</button>
      </div>
    <modal :open="modalOpen" @on-close="modalOpen = false">
      <div class="container">
        <div class="image"><img class="img" :src="images" /></div>
        <div class="description">Deseja adicionar "{{ title }}" ao carrinho?</div>
        <div class="price">Valor: R${{ price }}</div>
        <div class="buttons">
          <button @click="buy" class="button">Sim</button>
          <div><button @click="modalOpen = false" class="button">Cancelar</button></div>
        </div>
      </div>
    </modal>
    <modal :open="modalBuyOpen" @on-close="modalBuyOpen = false">
      <div class="container">
        <div class="image"><img class="img" :src="images" /></div>
        <div v-if="!checkout" class="description">Deseja comprar "{{ title }}"</div>
        <div class="price">Valor: R${{ price }}</div>
        <div class="buttons">
          <button @click="confirmSell" class="button">Sim</button>
          <div><button @click="modalBuyOpen = false" class="button">Cancelar</button></div>
        </div>
      </div>
    </modal>
  </div>
</div>
</template>

<script lang="ts">

import {
  defineComponent, reactive, toRefs, ref
   } from "vue";

import useCards, { Product } from "@/modules/cards";

import Modal from "./Modal.vue";

export default defineComponent({
  components: { Modal },
  emits: ["on-close"],
  props: {
    checkout: Boolean,
    products: { type: Object, required: true },
    title: { type: String, default: " " },
    body: { type: String, default: " " },
    categories: { type: String, default: " " },
    images: { type: String, default: " " },
    price: { type: Number, default: 0 }
  },
  setup(props, { emit }) {
    const cards = useCards();
    const modalBuyOpen = ref(false);
    const modalOpen = ref(false);
    const buy = async () => {
      const res = await cards.actions.buyProduct(props.products as Product);
      if (res) {
        modalOpen.value = false;
      }
    };
    const confirmSell = () => {
      cards.actions.sellProduct(props.products as Product).then(res => {
        if (res) {
          modalBuyOpen.value = false;
          console.log("aaaaaaaaa", props.products);
        }
      });
    };
    return {
      modalOpen,
      modalBuyOpen,
      buy,
      cards,
      confirmSell
    };
  }
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: hidden;
  padding: 5px;
  margin: 10px;
  height: fit-content;
  width: 300px;
  font-size: 16px;
  background-color: white;
  border-radius: 5px;
  justify-items: center;
  align-items: center;
box-shadow: 0px 0px 10px 1px #B0B0B0;
}
.title {
  border-bottom: 1px solid black;
  border-bottom: 1px solid gray;
  font-weight: bolder;
}
.body {
  float: center;
  padding: 10px;
  color: gray;
}
.containerModal {
  display: flex;
  justify-content: flex-end;
}
.img {
  padding: 4px;
  height: 100px;
  width: 100px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image {
  justify-self: center;
  grid-area: image;
}
.description {
  justify-self: center;
  grid-area: description;
}
.price {
  font-weight: bolder;
  justify-content: right;
  grid-area: price;
}
.buttons {
  display: flex;
  margin: 5px;
  align-content: center;
  justify-content: center;
  grid-area: buttons;
}
.button:hover {
   cursor: pointer;
}

.button {
  margin: 4px;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 6px;
  background-color: green;
  /* background-image: linear-gradient(to right, #ff8080, #ff9999); */
  /* border-radius: 8px; */
  font-size: 15px;
  color: #fff;
  font-weight: 700;
  width: 100px;
}
.categories {
  border: solid 1px green;
  padding: 4px;
  color: green;
  align-items: baseline;
  align-self: center;
}
.categoriesIcon {
  padding: 4px;
}
.containerCategories {
  display: flex;
  align-self: right;
}
</style>
