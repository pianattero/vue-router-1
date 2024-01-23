import { useRouter } from 'vue-router';
<script setup>
import { useRouter } from 'vue-router';

//HOOKS
const router = useRouter();

//METHODS
const back = () => {
    router.push('/')
}

</script>
<template>
    <h1>404</h1>
    <button @click="back">Back Home</button>
</template>