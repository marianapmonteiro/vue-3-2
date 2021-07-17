<template>
<div class="root">
  <div class="nav">
    <div class="centerContainer">
      <!-- HOME, ABOUT E CARRINO -->
      <div class="about">
        <router-link to="/">Sobre nós</router-link>
      </div>
      <div class="home">
        <router-link to="/home">Home</router-link>
      </div>
      <div class="cart">
        <router-link v-if="isLogedIn" to="/novo">Meu carrinho</router-link>
        <router-link v-if="isLogedIn" to="/novo">
          <img v-if="isLogedIn" class="cart" src="./assets/kart.svg" />
        </router-link>
      </div>
    </div>
    <!-- LOGIN / LOGOUT / OLÁ / FAÇA LOGIN P VER OS PRODUTOS -->
    <div class="flexendContainer">
      <div class="boasVindas">
        <a class="ola" v-if="isLogedIn">Olá, {{username}}</a>
        <a v-else>Faça Login para ver os nossos produtos :)</a>
      </div>
      <div class="user">
        <img src="./assets/user.svg" />
        <router-link v-if="!isLogedIn" to="/login">Login</router-link>
        <a v-else href="#" @click="logout">Logout</a>
      </div>
    </div>
  </div>

  <div style="flex-grow: 1">
    <router-view />
  </div>

  <div class="footer">footer ©</div>
</div>
</template>

<script>
import { computed, defineComponent, watch } from 'vue';
import useAuth from '@/modules/auth';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const auth = useAuth();
    const router = useRouter();
    const route = useRoute();

    watch(
      () => route.path,
      () => {
        if (!auth.state.token) {
          router.push({ name: 'Login' });
        }
      }
    );

  const isLogedIn = computed(() => auth.state.token);
  const username = computed(() => auth.state.username);

  const logout = () => {
    const res = auth.mutations.logout();
    if (res) {
      router.push({ name: 'Login' });
    }
  };
   if (!auth.state.token) {
          router.push({ name: 'Login' });
        }

  return {
    isLogedIn,
    logout,
    username
  };
 }
});
</script>

<style lang="scss">
.root{
  display: flex;
  flex-direction: column;
  // border: 1px solid green;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  left:0;
  top:0;
  font-family: Arial, Helvetica, sans-serif;
}

.nav{
  display: flex;
  justify-content: space-around;
  background-color: #6666cc;
  width: 100%;
  height: 50px;
  padding: 50px;
  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #ffbf80;
    }
  }
}
.centerContainer{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.user{
  //  margin-left: 10px;
  display: flex;
  align-items: center;
  // justify-content: flex-end;
  // justify-self: flex-end;
  // align-self: flex-end;
}
.ola{
  justify-content: baseline;
  text-justify:center;
  // height: 10px;
}
.boasVindas {
  margin-right: 10px;
}
.about{
   margin-left: 10px;
}
.home{
  margin-left: 10px;
}
.cart {
  display: flex;
  align-items: baseline;
  justify-content: baseline;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
}
.flexendContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer{
  justify-content: flex-end;
  background-color: #6666cc;
  color: white;
  font-weight: bolder;
  text-align: center;
}

</style>
