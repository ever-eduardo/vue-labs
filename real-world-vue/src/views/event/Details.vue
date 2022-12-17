<template>
  <div v-if="event" class="detail">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import EventService from "../../services/EventService.js";
const event = ref("");
const props = defineProps(["id"]);

onBeforeMount(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
}
</style>
