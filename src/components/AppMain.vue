<script>
import Card from './Card.vue'
import { store } from '../../src/data/store'
import WelcomePage from './WelcomePage.vue'
import Loader from './Loader.vue'
export default {
    name: 'AppMain',
    components: { Card, WelcomePage, Loader },
    data() {
        return {
            store
        }
    },
    emits: []
}

</script>
<template>
    <main class=" pt-2">
        <welcome-page v-if="!store.movies.length && !store.isLoading"></welcome-page>
        <loader v-if="store.isLoading"></loader>
        <div v-if="store.movies.length && !store.isLoading" class="container py-4">
            <h1 class="pt-5 pb-4 text-light">FILM</h1>
            <div class="gap-3 ps-3  row row-cols-1 row-cols-md-3 row-cols-lg-4  row-cols-xl-5">
                <card v-for="movie in store.movies" :key="movie.id" :card='movie'></card>
            </div>
        </div>
        <div v-if="store.series.length && !store.isLoading" class="container py-4">
            <h1 class="pt-5 pb-4 text-light">SERIE TV</h1>
            <div class="gap-3  row row-cols-1 row-cols-md-3 row-cols-lg-4  row-cols-xl-5">
                <card v-for="serie in store.series" :key="serie.id" :card='serie'></card>
            </div>
        </div>
    </main>
</template>

<style lang="scss" >
* {
    font-family: 'Bebas Neue', cursive;

}

main {
    min-height: 70vh;
    background-color: rgb(7, 7, 7);
}
</style>