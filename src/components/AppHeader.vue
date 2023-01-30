<script>
import { store } from '../../src/data/store'
import SelectOptions from './SelectOptions.vue'
export default {
    name: 'AppHeader',
    components: { SelectOptions },
    data() {
        return {
            store
        }
    },
    methods: {
        passChange(id) {
            this.$emit('current-option', id)
        }
    },
    emits: ['clicked', 'current-option']
}
</script>
<template>
    <header>
        <div class=" container d-flex justify-content-between align-items-center py-2">
            <div><img @click="$emit('clicked')" class="w-50 d-none d-sm-block" src="../assets/img/boolflix.png"
                    alt="boolflix"></div>
            <div class="logo"><img @click="$emit('clicked')" class="w-50 d-block d-sm-none logo"
                    src="../assets/logo.png" alt="boolflix"></div>
            <div class="d-flex gap-2 align-items-center flex-column w-50">
                <form v-on:submit.prevent="onSubmit" class="d-flex" role="search">
                    <input v-model.trim="store.searchedTerm" class="form-control me-1" @keyup.enter="$emit('clicked')"
                        type="search" placeholder="Cerca" aria-label="Search">
                    <button @click="$emit('clicked')" class="btn btn-outline-danger" type="button">Trova</button>
                </form>
                <select-options @option-change="passChange"></select-options>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 13vh;

    img {
        cursor: pointer;
    }

    .logo {
        width: 100px;
        height: 100%;
    }
}
</style>