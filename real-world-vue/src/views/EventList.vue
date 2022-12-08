<script setup>
import EventCard from "../components/EventCard.vue";
import EventService from "../services/EventService.js";
import { onBeforeMount, ref, onUpdated } from "vue";
let events = ref([]);
const props = defineProps(["page"]);
const getData = () => {
  EventService.getEvents(2, props.page)
    .then((response) => {
      events.value = response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
onBeforeMount(getData);
onUpdated(getData);
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
      <RouterLink
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >Prev Page</RouterLink
      >
      <RouterLink
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        >Next Page</RouterLink
      >
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
