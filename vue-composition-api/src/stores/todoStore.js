import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todoListStore', () => {
    let todoList = ref([]);
    let id = ref(1);
    function addTodo(item) {
        todoList.value.push({ item, id: id.value++, completed: false });
    }
    function removeTodo(itemId) {
        todoList.value = todoList.value.filter((object) => {
            return object.id !== itemId;
        });
    }
    function toggleCompleted(idTofind) {
        const todo = todoList.value.find((obj) => obj.id === idTofind);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
    return { todoList, addTodo, removeTodo, toggleCompleted };
});