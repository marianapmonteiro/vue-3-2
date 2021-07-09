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
        <div class="price">
            R$ {{ price }}
        </div>
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
          <button v-if="!checkout" @click="modalOpen=true" class="button">
            <transition name="fade">Adicionar ao carrinho</transition>
            </button>
          <div v-else><button @click="modalBuyOpen=true" class="button">Comprar</button></div>
        </div>  <modal :open="modalBuyOpen" @click="$emit('on-close')">
            <div class="container">Deseja realizar a compra?</div>
              <div class="buttons">
                <button @click="confirmSell" class="button">Sim</button></div>
                <div><button @click="$emit('on-close')" class="button">Cancelar</button></div>
            </modal>
                </div>
        <modal :open="modalOpen" @on-close="modalOpen=false">
          <div class="container">
              <div class="image"><img class="img" :src="images" /></div>
              <div class="description">Deseja adicionar "{{ title }}" ao carrinho?</div>
              <div class="price">Valor: R${{ price }}</div>
              <div class="buttons">
                <button @click="buy" class="button">Sim</button>
                </div>
              <div><button @click="modalOpen=false" class="button">Cancelar</button>
              </div>
          </div>
        </modal>
</template>

<script lang="ts">
import useCards, { Product } from '@/modules/cards';
import {
  defineComponent, reactive, toRefs, ref,
} from 'vue';
import Modal from './Modal.vue';

export default defineComponent({
  components: { Modal },
  emits: [
    'on-close',
  ],
  props: {
    checkout: Boolean,
    products: { type: Object, required: true },
    title: { type: String, default: ' ' },
    body: { type: String, default: ' ' },
    categories: { type: String, default: ' ' },
    images: { type: String, default: ' ' },
    price: { type: Number, default: 0 },
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
    const confirmSell = (e: MouseEvent) => {
        cards.actions.sellProduct(props.products as Product).then((res) => {
          if (res) {
            modalBuyOpen.value = false;
            console.log('aaaaaaaaa', props.products);
          }
           });
     };
    return {
      modalOpen,
      modalBuyOpen,
      buy,
      cards,
      confirmSell,
    };
  },
});
</script>

<style scoped>
.card{
font-size: 16px;
background-color: white;
border-radius: 5px;
padding:7px;
margin: 7px;
height: fit-content;
width: 300px;
box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
transition: 0,4 ease-out;
justify-items: center;
}
.card:hover{
  cursor: pointer;
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}
.title{
  border-bottom: 1px solid gray;
  font-weight: bolder;
}
.body{
   float: center;
   padding: 10px;
   color: gray;
}
.containerModal{
  padding: 5px;
}
.img{
  padding: 4px;
  height: 100px;
  width: 100px;
}
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 5px;
  /* display: grid;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-rows: 1.4fr 0.9fr 0.7fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  align-items: center;
  grid-template-areas:
    "image image"
    "description description"
    "price price"
    "buttons buttons";
  width: 86%;
  height: 100%; */
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
  justify-self: start;
  grid-area: price;
}

.buttons {
  display: flex;
  margin: 5px;
  align-content: center;
  justify-content: center;
  grid-area: buttons;
}
.button{
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
.categories{
  border: solid 1px green;
  padding: 4px;
  color: green;
  align-items: baseline;
  align-self:center;
}
.categoriesIcon{
  padding: 4px;
  padding-left: 4px;
  justify-content: baseline;
  align-content: baseline;
}
.containerCategories{
  display: flex;
  flex-direction: center;
  align-content: baseline;
  justify-content: center;
}
</style>
