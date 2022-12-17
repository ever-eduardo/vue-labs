<template>
  <p>Register for the event here.</p>
  <button @click="register">Register Me</button>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function register() {
  router.push({
    name: "EventDetails"
  });
}
</script>

<style scoped></style>
