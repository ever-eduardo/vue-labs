<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div class="nav-wrapper container center">
        <RouterLink class="hoverable" to="/">Home</RouterLink> | 
        <RouterLink class="hoverable" to="/todo">ToDoList</RouterLink> | 
        <RouterLink class="hoverable" to="/about">About</RouterLink>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  font-size: 2rem;
}

nav a {
  padding: 13px;
  font-weight: bold;
}

nav a.router-link-exact-active {
  padding: 13px;
  text-decoration: underline;
}
</style>
