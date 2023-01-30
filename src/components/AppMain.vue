<script>
import CardSection from './subcomponents/CardSection.vue'
import { store } from '../../src/data/store'
import WelcomePage from './subcomponents/WelcomePage.vue'
import Loader from './subcomponents/Loader.vue'
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
    <main class=" py-2">
        <welcome-page v-if="!store.movies.length && !store.isLoading && !store.series.length"></welcome-page>
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
    min-height: 69vh;
    background-color: rgb(44, 43, 43);
}
</style>