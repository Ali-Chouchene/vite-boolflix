<script>
import { store } from '../../src/data/store'
export default {
    name: 'AppFooter',
    components: {},
    data() {
        return {
            store
        }
    },
}

</script>
<template>
    <footer>
        <div class="container gap-3 flex-md-row flex-column py-1 d-flex align-items-center justify-content-between">
            <img class="pt-2" src="../assets/img/boolflix.png" alt="">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 p-4 w-75">
                <div class="col" v-for="link in store.footerLinks" :key="link.id"><a href="#">{{ link.link }}</a></div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: black;
    min-height: 17vh;

    img {
        width: 150px;
        height: 50px;
    }

    .col {
        color: white;

        a {
            text-decoration: none;
            color: white;

            &:hover {
                color: red;
            }
        }
    }
}
</style>