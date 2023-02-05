<script setup>
import { useTodoListStore } from "../stores/todoStore";
import { storeToRefs } from "pinia";
const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, removeTodo } = store;
</script>

<template>
    <div class="container" v-for="todo in todoList" :key="todo.id">
        <div>
            <blockquote :class="{ completed: todo.completed }">
                <h3>{{ todo.item }}</h3>
                <div>
                    <span v-if="!todo.completed" class="btn indigo" @click.stop="toggleCompleted(todo.id)"><i class="material-icons">check_circle</i></span>
                    <span v-else class="btn green" @click.stop="toggleCompleted(todo.id)"><i class="material-icons">autorenew</i></span>
                    <span class="btn red" @click="removeTodo(todo.id)"><i class="material-icons">delete</i></span>
                </div>
            </blockquote>
        </div>
    </div>
</template>

<style scoped>
.completed {
    text-decoration: line-through;
    color: red;
}
.span:hover {
    cursor: pointer;
}
</style>