<script setup lang="ts">
import qna from "../assets/data.json";
import { useTransmitter } from "../stores/transmitter";
import { search } from "../utils/search";
const transmitter = useTransmitter();
const cardClickCallback = (id: number) => {
  transmitter.setData(search(id.toString(), qna)!);
  transmitter.setModal({ state: true });
};
</script>

<template>
  <ul class="basic__list">
    <li
      class="basic__item"
      v-for="element in qna"
      :key="element.id"
      @click="cardClickCallback(element.id)"
    >
      <p class="basic__id">{{ element.id }}</p>
      <p class="basic__question">{{ element.question }}</p>
      <p class="basic__answer">{{ element.answer }}</p>
    </li>
  </ul>
</template>

<style scoped>
.basic__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
  gap: 1rem;
}
.basic__item {
  display: grid;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
}
.basic__id {
  color: green;
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
