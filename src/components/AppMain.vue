<script>
import CardSection from './CardSection.vue'
import { store } from '../../src/data/store'
import WelcomePage from './WelcomePage.vue'
import Loader from './Loader.vue'
export default {
    name: 'AppMain',
    components: { CardSection, WelcomePage, Loader },
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
        <card-section collection='movies' title="FILM"></card-section>
        <card-section collection='series' title="SERIE TV"></card-section>
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