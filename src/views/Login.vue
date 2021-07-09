<template>
<div class="container">
  <div class="login">
    <div style="margin: 10px;">Usuario:</div>
    <input class="input"  ref="user" v-model="username" style="border-radius:30px; padding:10px"
     type="text" @keyup="userHandler"/>
    <div style="margin: 10px;">Senha:</div>
    <input class="input" ref="pass" v-model="password" style="border-radius:30px; padding:10px;"
    type="password" @keyup="passHandler"/>
    <div style="margin: 10px;">
      <button @click="login" style=" height: 30px; border-radius: 30px;">Entrar</button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import useAuth from '@/modules/auth';
import {
  defineComponent, reactive, Ref, ref, toRefs,
  } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const auth = useAuth();
    const state = reactive({
      username: '',
      password: '',
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
      passHandler,
    };
  },
});
</script>
<style scoped>
.login{
  justify-content: center;
  height: 100%;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  align-items: center;

}
.input {
     padding: 5px;
     font-size: 16px;
     border-width: 1px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: solid;
     border-radius: 21px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.75);
     text-shadow: 0px 0px 5px rgba(66,66,66,.75);

}
.input:focus{
  outline: none;
}
</style>
