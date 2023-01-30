<script>
import Card from './Card.vue'
import { store } from '../../data/store'
export default {
    name: 'CardSection',
    components: { Card },
    props: {
        collection: String,
        title: String
    },
    data() {
        return {
            store
        }
    },
}

</script>
<template>
    <div class=" pt-2">
        <div v-if="store[collection].length && !store.isLoading" class="container py-4">
            <h1 class="pt-5 pb-4 text-light">{{ title }}</h1>
            <div class="gap-3 ps-3  row row-cols-1 row-cols-md-3 row-cols-lg-4  row-cols-xl-5">
                <card v-for="prod in store[collection]" :key="prod.id" :card='prod'></card>
            </div>
        </div>
    </div>
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