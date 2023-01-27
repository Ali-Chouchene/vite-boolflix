<script>
import { store } from '../../src/data/store'
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
    emits: ['clicked']
}

</script>
<template>
    <header class="bg-dark pb-2">
        <div class="container d-flex justify-content-between p-4">
            <div><img class="w-50 d-none d-sm-block" src="../assets/img/boolflix.png" alt="boolflix"></div>
            <div class="logo"><img class="w-50 d-block d-sm-none logo" src="../assets/logo.png" alt="boolflix"></div>
            <div class="d-flex align-items-center">
                <form v-on:submit.prevent="onSubmit" class="d-flex" role="search">
                    <input v-model="store.searchedTerm" class="form-control me-1" @keyup.enter="$emit('clicked')"
                        type="search" placeholder="Cerca" aria-label="Search">
                    <button @click="$emit('clicked')" class="btn btn-outline-danger" type="button">Trova</button>
                </form>
            </div>
        </div>
    </header>
</template>



<style lang="scss" scoped>
header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    .logo {
        width: 100px;
        height: 100%;
    }
}
</style>