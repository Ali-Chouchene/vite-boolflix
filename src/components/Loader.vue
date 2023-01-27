<script>
import { store } from '../../src/data/store'
export default {
    name: 'Loader',
    Data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center w-100 loader-container">
        <div class="loader"></div>
        <h3 class="pt-4 text-light">Loading...</h3>
    </div>
</template>

<style lang="scss" scoped>
.loader-container {
    height: 60vh;
}

.loader {

    border: 10px solid #000000;
    border-radius: 50%;
    border-top: 7px solid #d60d0d;
    width: 100px;
    height: 100px;
    animation: spinner 1s linear infinite;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>