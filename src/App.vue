<script setup lang="ts">
import Search from "./components/search.vue";
import Basic from "./components/basic.vue";

</script>

<template>
  <section class="app__container">
    <Search />
    <Basic />
  </section>
</template>

<style scoped>
.app__container {
  font-family: sans-serif;
  padding: 3rem 6rem;
}

@media (max-width: 768px) {
  .app__container {
    width: 320px;
    padding: 1rem;
    margin: 0 auto;
  }
}
@media (max-width: 320px) {
  .app__container {
    padding: 1rem;
  }
}
</style>
