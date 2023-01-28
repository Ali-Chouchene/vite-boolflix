<script>
import { store } from '../data/store'
export default {
    name: 'SelectOptions',

    data() {
        return {
            store,
            currentValue: null,
        }

    },
    computed: {


    },
    methods: {
    },
    emits: ['option-change']
}

</script>
<template>
    <span class="d-flex w-75 align-items-center">
        <h5 class="w-25 m-0 d-none d-lg-block">RICERCA GENERE :</h5>
        <select class="form-select  mw-50 " v-model="currentValue" @change="$emit('option-change', currentValue)">
            <option selected value="">Tutti i Generi</option>
            <option v-for="genre in store.genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        </select>
    </span>

</template>
<style lang="scss" scoped>
h5 {
    color: rgb(238, 22, 6);
}
</style>