<script setup>
import { ref } from 'vue'
const count = ref(0);
function succ() {
    count.value++;
}
function reset() {
    count.value = 0;
}
</script>

<template>
    <div class="container center">
        <h1></h1>
        <button class="btn waves-effect indigo" @click="succ">Count {{ count }}</button>
        <button class="btn waves-effect red" @click="reset">Reset</button>
        <h1></h1>
  </div>
</template>

<style scoped>
</style>
