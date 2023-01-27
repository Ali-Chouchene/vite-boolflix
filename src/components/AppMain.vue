<script>
import Card from './Card.vue'
import { store } from '../../src/data/store'
export default {
    name: 'AppMain',
    components: { Card },
    data() {
        return {
            store
        }
    },
    emits: []
}

</script>
<template>
    <main class="bg-secondary pt-2">
        <div class="container py-4">
            <h1 class="pt-5 pb-4 text-light">FILM</h1>
            <div class="gap-3 row row-cols-1 row-cols-md-3 row-cols-lg-4  row-cols-xl-5">
                <card v-for="movie in store.movies" :key="movie.id" :card='movie'></card>
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
.col {
    height: 500px;
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 0.164);
    color: white;
    padding-left: 0;
    padding-right: 0;
    cursor: pointer;
    position: relative;


    .language {
        width: 50px;
        height: 30px;
    }

    img {
        object-fit: fill;
        display: block;
        height: 100%;
        width: 100%;
        margin-top: 10px;
    }

    &:hover .description {
        visibility: visible;
        opacity: 1;
    }

    .description {
        position: absolute;
        padding: 2rem 2rem;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.836);
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s linear;
        overflow-y: auto;
        word-wrap: break-word;

        h5 {
            text-shadow: 4px 3px 2px rgba(124, 2, 2, 0.99);
            font-size: 20px;
            margin: 0;
        }

        h6 {
            font-size: 17px;
            line-height: 20px;
            margin: 0;
        }

    }

}
</style>