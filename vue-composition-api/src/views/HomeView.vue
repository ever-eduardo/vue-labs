<script setup>
import { ref } from 'vue'
import Counter from '@/components/Counter.vue'
const counters = ref([1]);
function addCounter() {
  counters.value.push(1);
}
function deleteCounter() {
  counters.value.pop();
}
</script>

<template>
  <div class="container center">
    <h1>Vue App</h1>
    <button class="btn-floating indigo btn-large waves-effect waves-light" @click="addCounter"><i class="material-icons">add</i></button>
    <button class="btn-floating red btn-large waves-effect waves-light" @click="deleteCounter"><i class="material-icons">delete</i></button>
    <Counter v-for="item in counters"></Counter>
  </div>
</template>

<style scoped>
</style>
