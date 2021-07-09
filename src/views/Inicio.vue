<template>
  <div>
      <!-- <slide :image="require(`@/assets/${imgCarousel2}`),
      require(`@/assets/${imgCarousel}`),">></slide> -->
    <!-- <div>
         <img class="img" src="https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
    </div> -->
    <div class="container">
        <div class="menus">Receba em horas</div>
        <div class="menus">Frete grátis</div>
        <div class="menus">Até 10x sem juros</div>
        <div class="menus">Retire e troque na loja</div>
    </div>
     <div class="section">Aqui você encontra:</div>
     <div class="container2">
        <div class="image2"><img class="img2" src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934__480.png"></div>
        <div class="image1"><img class="img1" src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934__480.png"></div>
        <div class="alt1">Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercício ullamco laboris nisi ut aliquip ex ea commodo consequat.
             velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt
             mollit anim id est laborum.</div>
        <div class="alt2">bbbbbbbb</div>
        </div>
            <div class="finalPageContainer">
            <div class="finalPage">Tudo que você precisa em só um lugar!
             Venha conhecer nossa loja fisíca!
            </div>
            <div class="footer">FOOTER</div>
            </div>
            </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// import Slide from '@/components/Slide.vue';

export default defineComponent({
    // components: {
    //     Slide,
    // },
   setup() {
       const img1 = '../assets/imgCarousel.png';
       const img2 = '../assets/imgCarousel2.png';

    return {
        img1,
        img2,
    };
  },
});
</script>

<style scoped>
.img{
    padding-top: 20px;
    height: 400px;
    width: 100%;
}
.menus{
    display: flex;
    padding: 20px;
    border-right: 1px solid gray;
    height: 100px;
    width: 200px;
}
.container{
    display: flex;
    justify-content: center;
}
.section{
    padding: 20px;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    display: flex;
    padding-top: 20px;
    font-weight: bolder;

}
.container2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 8px 4px;
  grid-auto-flow: column;
  justify-content: center;
  justify-items: stretch;
  grid-template-areas:
    "image1 alt1"
    "alt2 image2";
  width: 97%;
  height: 92.1%;
}

.image2 { grid-area: image2; }

.image1 { grid-area: image1; }

.alt1 {
  justify-self: center;
  align-self: center;
  grid-area: alt1;
}
.alt2 {
    grid-area: alt2;
    justify-self: center;
    align-self: center;
}
.img1 {
    border-radius: 10px;
}
.img2 {
    border-radius: 10px;
}
.finalPage{
    padding-top: 60px;
    border-radius: 60px;
    width: 100%;
    height:200px;
    background-color: blue;
    text-align: center;
}
.finalPageContainer{
    display: flex;
    flex-direction: column;
}

</style>
