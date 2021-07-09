<template>
  <div v-if="open" class="modal" @click="clickHandler">
    <div class="modal-container">
        <div class="modalClose" @click="$emit('on-close')">x</div>
        <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
      open: Boolean,
    },
  emits: ['on-close'],
  setup(props, { emit }) {
      const clickHandler = (e: MouseEvent) => {
        console.log('click', e.target);
        const el = e.target as HTMLElement;
        if (el.className === 'modal') {
        console.log('click', el.className);
        emit('on-close');
          }
     };
    return {
        clickHandler,
    };
  },
});
</script>

<style scoped>
body{
  position: absolute;
  width: 100%;
  height: 100%;
}
.modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh ;
    bottom: 0;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
     overflow-x:hidden;
}
.modal-container {
    position: fixed;
    top: 50%;
     left: 50%;
    align-content: center;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 5px;
    width: fit-content;
    height: fit-content;
    max-width: 80%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background: white;
    overflow-x: hidden;
}
.modalClose {
    text-align: right;
    cursor: pointer;
    /* padding: 20px; */
}
</style>
