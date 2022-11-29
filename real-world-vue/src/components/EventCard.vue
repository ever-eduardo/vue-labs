<script setup>
defineProps({
  event: {
    type: Object,
  },
});
</script>

<template>
  <RouterLink
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  >
    <div class="event-card">
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: center;
}

.event-card:hover {
  transform: scale(1.07);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.3);
}

h4 {
  text-align: center;
  font-weight: 800;
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}

.event-link:hover {
  color: #2c3e50;
  text-decoration: none;
}
</style>
