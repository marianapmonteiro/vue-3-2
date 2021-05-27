<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Sobre nós</router-link> |
     <router-link to="/novo">Meu carrinho</router-link> |
     <router-link v-if="!isLogedIn" to="/login">Login</router-link>
     <a  v-else href="#" @click="logout">Logout</a>
  </div>
  <div class="boasvindas" v-if="isLogedIn">Olá,{{username}}</div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  text-align: end;
  position: end;
  // display: flex;
  // justify-content: flex-end;
  // justify-content: flex-end;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.boasvindas{
  align-self: center;
  margin:10px;
}

</style>
