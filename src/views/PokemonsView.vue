<script setup>
//IMPORTS
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { useGetData } from '@/composables/getData'

//HOOKS
onMounted(() => {
  getData('https://pokeapi.co/api/v2/pokemon')
});

//COMPOSABLES
const { data, getData } = useGetData()

</script>

<template>
    <h1>Pokemons</h1>
    <div v-if="data">
        <ul>
            <li v-for="pokemon in data?.results">
                <RouterLink :to="`/pokemons/${pokemon.name}`" >{{ pokemon.name }}</RouterLink>
            </li>
        </ul>
    <button
    :disabled="data.previous === null"
    class="btn mx-2 btn-outline-success"
    @click="getData(data.previous)"
    >Previous</button>

    <button
    :disabled="data.next === null"
    class="btn btn-outline-success"
    @click="getData(data.next)"
    >Next</button>
    </div>
</template>