<template>
  <div v-if="event" class="detail">
    <h1>{{ event.title }}</h1>
    <div class="nav">
      <RouterLink :to="{ name: 'EventDetails' }">Details |</RouterLink>
      <RouterLink :to="{ name: 'EventRegister' }"> Register |</RouterLink>
      <RouterLink :to="{ name: 'EventEdit' }"> Edit</RouterLink>
    </div>
    <RouterView :event="event"></RouterView>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import EventService from "../../services/EventService.js";
const event = ref("");
const props = defineProps(["id"]);
const router = useRouter();

onBeforeMount(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data;
    })
    .catch((err) => {
      console.log(err);
      if (err.response && err.response.status === 404) {
        router.push({
          name: "EventNotFound",
          params: { resource: "event" }
        });  
      } else {
        router.push({ name: "NetworkError" });
      }
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

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}
</style>
