<script>
const lang = ['it', 'en', 'fr', 'ca', 'cn', 'es', 'hr', 'ja', 'ml', 'nl', 'sh',];
import { store } from '../../src/data/store'
export default {
    name: 'Card',
    data() {
        return {
            store

        }
    },
    methods: {
        ratingStars(n) {
            const vote = Math.ceil(n) / 2;
            return Math.ceil(vote)


        }
    },
    props: { card: Object }

}

</script>
<template>
    <div class="col shadow text-center">
        <img :src="`${store.imgBase}${card.poster_path}`" :alt="card.title">
        <div class="description d-flex flex-column align-items-center gap-2">
            <h5><strong>Titolo:</strong></h5>
            <h6>{{ card.title }}</h6>
            <h5>VOTE</h5>
            <div v-if="card.vote_average">
                <i v-for="star in ratingStars(card.vote_average)" class="fa-solid fa-star checked"> </i>
            </div>
            <p v-else>-</p>
            <h5><strong>Lingua:</strong></h5>
            <img v-if="store.lang.includes(card.original_language)" class="language"
                :src="`/src/assets/img/${card.original_language}.png`" alt="">
            <p v-else>{{ card.original_language }}</p>
            <h5><strong>Overview:</strong></h5>
            <h6>{{ card.overview }}</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col {
    height: 500px;
    flex-grow: 0.2;
    background-color: rgba(0, 0, 0, 0.164);
    color: white;
    padding-left: 0;
    padding-right: 0;
    cursor: pointer;
    position: relative;


    .language {
        width: 70px;
        height: 50px;
    }

    img {
        object-fit: fill;
        display: block;
        height: 100%;
        width: 100%;
    }

    &:hover .description {
        visibility: visible;
        opacity: 1;
    }

    .description {
        position: absolute;
        padding: 1.5rem 2rem;
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
        }

        h6 {
            font-size: 15px;
        }

        .checked {
            color: rgb(255, 0, 0);
        }
    }

}
</style>