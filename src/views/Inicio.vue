/* eslint-disable max-len */
<template>
  <div class="containerHome">
    <slide
      :image="[
        'https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.15752-9/215157283_245139403819767_4180250738694273307_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeEUDrgGhutBzUsCCU9vOQdFg8KmE3yTWYODwqYTfJNZg7A_qwz6VnGgau4BHZ_cmA04fZUM_jQFDTm-_eM-bC6z&_nc_ohc=oIqg8k-cZKEAX-4IR2D&tn=ogACYd_qA4QrAUyc&_nc_ht=scontent.fsdu5-1.fna&oh=d09230940cfc38c6cc13a0c82e22c357&oe=60EFADEA',
        'https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.15752-9/216578339_198723615515794_5104778802525383423_n.png?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGazodro4joLw4tJrUcudiuNuHppVglk6U24emlWCWTperibcIdPb0a3v68eEM95uYgEjdIroAFfivQ5sadhKYf&_nc_ohc=Cdku61DMS50AX8KALYK&_nc_oc=AQmNjQIdQWfz0nwBPh0U6o7DPXApLr7FXcjUuX8ym_JrLMuAHa3Mhi6aO5KTieGnpKFgnrW0VKj17_Zv3EBB5oSR&_nc_ht=scontent.fsdu5-1.fna&oh=22bafd619c3cb7a0c8360de47308cfa8&oe=60F1941F'
      ]"
    ></slide>
    <div class="container">
      <div class="menus">
        <div class="clock">
          Receba em horas
          <img class="clockImg" src="../assets/clock.svg" />
        </div>
      </div>
      <div class="menus">
        <div class="frete">
          Frete grátis
          <img class="freteImg" src="../assets/shipping.svg" />
        </div>
      </div>
      <div class="menus">
        <div class="juros">
          Até 10x sem juros
          <img class="jurosImg" src="../assets/creditCard.svg" />
        </div>
      </div>
      <div class="menus">
        <div class="loja">
          Retire e troque na loja
          <img class="lojaImg" src="../assets/store.svg" />
        </div>
      </div>
    </div>
    <div class="Label">
      Aqui você encontra:
    </div>
    <div class="divPai">
      <div class="divFilha1">
        <!-- <div class="image2"> -->
        <div>
        <img
          class="img2"
          src="../assets/images.png"
        />
        </div>
        <div class="alt2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </div>
      </div>
      <!-- </div> -->
      <div class="divFilha2">
        <!-- <div class="image1"> -->
        <img
          class="img1"
          src="../assets/images.png"
        />
        <div class="alt1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </div>
        <!-- </div> -->
      </div>
    </div>
    <div class="meet">
      <div class="meetImg"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Slide from "@/components/Slide.vue";

export default defineComponent({
  components: {
    Slide
  },
  setup() {
    const img1 = "../assets/imgCarousel.png";
    const img2 = "../assets/imgCarousel2.png";

    return {
      img1,
      img2
    };
  }
});
</script>

<style scoped>
body {
  position:  absolute;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
.img {
  padding-top: 20px;
  height: 400px;
  width: 100%;
}
.menus {
  display: flex;
  padding: 20px;
  border-right: 1px solid #6666cc;
  color: #6666cc;
  height: 50px;
  width: 200px;
  justify-content: center;
}
.container {
  display: flex;
  justify-content: center;
}

.Label {
  display: flex;
  justify-content: left;
  margin: 20px;
  color: #6666cc;
  font-weight: bolder;
}
.divFilha1 {
  display: flex;
  margin: 20px;
  align-items: center;
}
.divFilha2 {
  align-items: center;
  display: flex;
  margin: 20px;
  align-items: center;;
  flex-direction: row-reverse;
}
.img1{
  height: 500px;
  width: 500px;
  border-radius: 10px;
}
.alt2{
  margin-left: 50px;
  color: #6666cc;
  font-weight: bolder;
  justify-self: center;
}
.alt1{
  margin-right: 50px;
  color: #6666cc;
  font-weight: bolder;
}
.img2 {
  height: 500px;
  width: 500px;
  border-radius: 10px;
}
divPai {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.finalPage {
  padding-top: 60px;
  border-radius: 60px;
  width: 100%;
  height: 200px;
  background-color: blue;
  text-align: center;
}
.finalPageContainer {
  display: flex;
  flex-direction: column;
}
.clock {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}
.clockImg {
  padding-top: 10px;
  align-self: center;
  justify-self: center;
}
.loja {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}
.frete {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}
.juros {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}
.freteImg {
  padding-top: 10px;
  align-self: center;
  justify-self: center;
}
.jurosImg {
  padding-top: 10px;
  align-self: center;
  justify-self: center;
}
.lojaImg {
  padding-top: 10px;
  align-self: center;
  justify-self: center;
}
.meet {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.meetImg {
  border-radius: 36px;
  /* margin: 10px; */
  height: 300px;
  width: 800px;
  background-image: url("../assets/meet.png");
}
</style>
