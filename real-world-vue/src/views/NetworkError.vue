<template>
  <h2>Something went wrong :(</h2>
  <h2>It looks like you are experiencing some network issues.</h2>
  <h2>
    Please, take a breath and
    <a href="#" @click="router.go(-1)">click here</a> to try again.
  </h2>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>