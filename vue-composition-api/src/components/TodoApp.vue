<script setup>
import TodoList from "../components/ToDoList.vue"
import TodoForm from "../components/ToDoForm.vue"
</script>

<template>
    <div class="container center">
        <h1>To Do List</h1>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
    </div>
</template>

<style scoped>
</style>