<template>
  <div v-if="event" class="detail">
    <h1>{{ event.title }}</h1>
    <div class="nav">
      <RouterLink to="{ name: 'EventDeatils', params: { id }}"
        >Details</RouterLink
      >
      <RouterLink to="{ name: 'EventRegister', params: { id }}"
        >Register</RouterLink
      >
      <RouterLink to="{ name: 'EventEdit', params: { id }}">Edit</RouterLink>
    </div>
    <p>Register for event here.</p>
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
