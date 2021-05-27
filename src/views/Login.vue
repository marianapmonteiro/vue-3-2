<template>
  <div>
    <div style="margin: 10px;">Usuario:</div>
    <input ref="user" v-model="username" style="border-radius:30px; padding:10px"
     type="text" @keyup="userHandler"/>
    <div style="margin: 10px;">Senha:</div>
    <input ref="pass" v-model="password" style="border-radius:30px; padding:10px;"
    type="password" @keyup="passHandler"/>
    <div style="margin: 10px;">
      <button @click="login" style=" height: 30px; border-radius: 30px;">Entrar</button>
    </div>
  </div>
</template>

<script lang="ts">
import useAuth from '@/modules/auth';
import {
  defineComponent, reactive, Ref, ref, toRefs
  } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const auth = useAuth();
    const state = reactive({
      username: '',
      password: ''
    });
     const router = useRouter();
     const user: Ref<HTMLElement|null> = ref(null);
     const pass: Ref<HTMLElement|null> = ref(null);

    const login = () => {
      const res = auth.actions.login(state.username, state.password);
      if (res) {
        router.push({ name: 'Home' });
      }
    };
    const userHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username && pass.value) {
        pass.value.focus();
      } else if (e.key === 'Enter' && !state.username) {
        alert('Insira o nome de usuário');
      }
    };
    const passHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username && state.password) {
        login();
      } else if (e.key === 'Enter' && !state.password) {
        alert('Insira a senha');
      }
    };
    return {
      ...toRefs(state),
      login,
      userHandler,
      user,
      pass,
      passHandler
    };
  }
});
</script>

<style scoped>
</style>
