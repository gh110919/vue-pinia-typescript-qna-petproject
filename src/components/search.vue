<script setup lang="ts">
import qna from "../assets/data.json";
import { TQna } from "../assets";
import Modal from "./modal.vue";
import { useTransmitter } from "../stores/transmitter";
import { search } from "../utils/search";
const transmitter = useTransmitter();

let inputText = "";

const searchElement = () => {
  const searched: TQna = search(inputText, qna)!;
  console.log(searched);

  transmitter.setData({
    id: searched.id,
    question: searched.question,
    answer: searched.answer,
  });
  transmitter.setModal({ state: true });
};
</script>

<template>
  <div class="search__container">
    <label class="search__label" for="site-search">Search the site:</label>
    <div class="search__box">
      <input
        placeholder="Введите текст"
        class="search__input"
        v-model="inputText"
        type="search"
        id="site-search"
        name="q"
      />
      <button class="search__button" @click="searchElement">Search</button>
    </div>
    <Modal />
  </div>
</template>

<style scoped>
.search__container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}
.search__box {
  display: flex;
  gap: 1rem;
  max-width: 654px;
  min-width: 268px;
}
.search__input {
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
}
.search__button {
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
