<script setup>
const props = defineProps({
    message: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="container center">
        <h1>You got a message!</h1>
        <hr>
        <h2>{{ props.message }}</h2>
    </div>
</template>

<style scoped></style>
