<script setup>
//IMPORTS
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData'

//HOOKS
const route = useRoute();
const router = useRouter();
onMounted(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokeName}`);
});

//COMPOSABLES
const { data, getData, errorData } = useGetData();

//METHODS
const back = () => {
    router.push('/pokemons')
};

</script>
<template>
    <div v-if="data">
        <img :src="data?.sprites?.front_default" alt="Poke Img">
        <h1>Poke Name: {{$route.params.pokeName}} </h1>
    </div>
    <div class="alert alert-danger" v-if="errorData">{{ errorData }}</div>
    <button @click="back">Back</button>
</template>