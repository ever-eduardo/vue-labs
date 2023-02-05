<script setup>
import { ref } from "vue";
import { useTodoListStore } from "../stores/todoStore";

const todo = ref("");
const store = useTodoListStore();

function addItemAndClear(item) {
    if (item.length === 0) {
        return;
    }
    store.addTodo(item);
    todo.value = "";
}
</script>

<template>
    <div>
        <form @submit.prevent="addItemAndClear(todo)">
            <div class="input-field">
                <input class="validate" placeholder="Type something to do ..." id="item" type="text" name="" v-model="todo">
                <label for="item">To do</label>
            </div>
            <button class="btn btn-large btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
        </form>
    </div>
</template>
<style scoped></style>