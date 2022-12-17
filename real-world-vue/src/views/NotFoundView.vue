<template>
  <h2>Something went wrong :(</h2>
  <h3 v-if="props.resource">
    The {{ props.resource }} you are looking for is not here.
  </h3>
  <h3 v-else>The page you are looking for is not here.</h3>
</template>

<script setup>
const props = defineProps(["resource"]);
</script>

<style scoped>
h1 {
  font-size: 3rem;
  text-align: center;
  padding: 2rem;
  margin: 2rem;
}

h2, h3 {
  font-size: 3rem;
  text-align: center;
}
</style>
