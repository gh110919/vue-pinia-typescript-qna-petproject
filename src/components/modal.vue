<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useTransmitter } from "../stores/transmitter";
const dialog = ref();
const transmitter = useTransmitter();

watchEffect(() => {
  if (transmitter.getModalState.state === true) {
    dialog.value.showModal();
  }
});

const closeCallback = () => {
  dialog.value.close();
  transmitter.$reset();
};
</script>

<template>
  <dialog class="modal__dialog" ref="dialog">
    <button class="close" @click="closeCallback">X</button>
    <div class="basic__item">
      <p>{{ transmitter.getDataState.id }}</p>
      <p class="basic__question">{{ transmitter.getDataState.question }}</p>
      <p class="basic__answer">{{ transmitter.getDataState.answer }}</p>
    </div>
  </dialog>
</template>

<style scoped>
.modal__dialog {
  max-width: 75%;
  max-height: 75%;
  border: none;
  border-radius: 1rem;
  margin: auto auto;
}
.close {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 9999;
  padding: .1rem .3rem;
}
.basic__item {
  position: relative;
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
}
.basic__question {
  color: red;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
}
.basic__answer {
  color: blue;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
}
</style>
