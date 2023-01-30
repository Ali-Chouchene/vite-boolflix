<script>
import { store } from '../../data/store'
export default {
    name: 'NavButton',
    components: {},
    data() {
        return {
            store
        }
    },
}

</script>

<template>
    <div class="btn-group ms-5">
        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Choice
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#movies">Movies</a></li>
            <li><a class="dropdown-item" href="#series">Series</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.btn-group {
    position: fixed;
    top: 22vh;
    left: 150px;


}

.dropdown-toggle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: red;
}
</style>