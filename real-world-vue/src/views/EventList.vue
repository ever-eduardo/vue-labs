<script setup>
import EventCard from "../components/EventCard.vue";
import EventService from "../services/EventService.js";
import { onBeforeMount, ref } from "vue";
let events = ref([]);

onBeforeMount(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<template>
  <main>
    <h1>Events for Good</h1>
    <div class="events">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :event="event"
      ></EventCard>
    </div>
  </main>
</template>

<style scoped>
.events {
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
