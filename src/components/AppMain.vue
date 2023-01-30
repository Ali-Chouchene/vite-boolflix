<script>
import CardSection from './subcomponents/CardSection.vue'
import { store } from '../../src/data/store'
import WelcomePage from './subcomponents/WelcomePage.vue'
import Loader from './subcomponents/Loader.vue'
import NavButton from './subcomponents/NavButton.vue'
export default {
    name: 'AppMain',
    components: { CardSection, WelcomePage, Loader, NavButton },
    data() {
        return {
            store
        }
    },
}

</script>
<template>
    <main class=" py-2">
        <nav-button></nav-button>
        <welcome-page v-if="!store.movies.length && !store.isLoading && !store.series.length"></welcome-page>
        <loader v-if="store.isLoading"></loader>
        <card-section id="movies" collection='movies' title="FILM"></card-section>
        <card-section id="series" collection='series' title="SERIE TV"></card-section>
    </main>
</template>

<style lang="scss" >
* {
    font-family: 'Bebas Neue', cursive;

}

main {
    min-height: 69vh;
    background-color: rgb(44, 43, 43);
}
</style>