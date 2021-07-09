<template>
  <div class="nav">
    <div class="centerContainer">
      <!-- HOME, ABOUT E CARRINO -->
    <router-link  to="/">Sobre nós</router-link> |
    <router-link to="/home">Home</router-link> |
     <router-link v-if="isLogedIn" to="/novo">Meu carrinho</router-link>
     <img v-if="isLogedIn" class="cart"  src="./assets/kart.svg" />
     </div>
     <!-- LOGIN / LOGOUT / OLÁ / FAÇA LOGIN P VER OS PRODUTOS -->
     <div class="user">
      <img src="./assets/user.svg" />
     <router-link v-if="!isLogedIn" to="/login">Login</router-link>
     <a v-else href="#" @click="logout">Logout</a>
     <div class="boasVindas">
     <a  v-if="isLogedIn">Olá, {{username}}</a>
     <a  v-else>Faça Login para ver os nossos produtos :)</a></div>
     </div>
  </div>
  <!-- <div class="usuario">
  <div class="boasvindas" v-if="isLogedIn">Olá,{{username}}</div>
  <div class="inicio" v-else>
    <div><div style="color: blue">Olá!
      </div>Faça Login para ver os nossos produtos :)</div></div></div> -->
  <router-view/>
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
      },
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
          router.push({ name: 'Home' });
        }

  return {
    isLogedIn,
    logout,
    username,
  };
 },
});
</script>

<style lang="scss">
#app {
  margin: 0;
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e0e0eb;
  width: 100%;
  height: 100%;;
}
.nav{
  display: flex;
  background-color: #006699;
  width: 100%;
  height: 100%;
  padding: 50px;
  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.centerContainer{
  margin: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-items: center;
}
.user{
  align-content: center;
  align-items: center;
  justify-items: flex-end;
  padding-right: 100px;
}
.boasVindas {
  width: 100px;
  margin: 10px;
}
</style>
