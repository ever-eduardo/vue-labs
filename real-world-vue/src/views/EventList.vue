<script setup>
import EventCard from "../components/EventCard.vue";
import EventService from "../services/EventService.js";
import { onBeforeMount, ref, watchEffect, computed } from "vue";
let events = ref([]);
let totalEvents = ref(0);
const props = defineProps(["page"]);
const getData = () => {
  EventService.getEvents(2, props.page)
    .then((response) => {
      events.value = response.data;
      totalEvents.value = response.headers["x-total-count"];
    })
    .catch((err) => {
      console.log(err);
    });
};
onBeforeMount(getData);
watchEffect(getData);
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2);
  return props.page < totalPages;
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
      <div class="pagination">
        <RouterLink
          id="page-prev"
          :to="{ name: 'EventList', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          >&#60;Previous</RouterLink
        >
        <RouterLink
          id="page-next"
          :to="{ name: 'EventList', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          >Next &#62;</RouterLink
        >
      </div>
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

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
