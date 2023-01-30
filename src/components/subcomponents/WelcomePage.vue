<script>
export default {
    name: 'WelcomePage'
}

</script>
<template>
    <div class="welcome-page d-flex justify-content-center flex-column align-items-center">
        <h1 class="boolflix d-block d-sm-none">BOOLFLIX</h1>
        <h1 class="d-block d-sm-none">CERCA QUALCOSA DA QUARDARE</h1>
        <h2 class="pb-3 d-none d-sm-block">BENVENUTO SU <span class="boolflix">BOOLFLIX</span> </h2>
        <h3 class="d-none d-sm-block">CERCA QUALCOSA DA QUARDARE</h3>
        <h4>O FAI UNA RICERCA CASUALE PER GENERE</h4>


    </div>
</template>
<style lang="scss" scoped>
.welcome-page {
    min-height: 65vh;
    width: 100%;

    h2 {
        font-size: 100px;
        color: rgb(168, 164, 164);

    }

    .boolflix {
        color: rgb(238, 22, 6);
    }

    h3 {
        font-size: 50px;
        color: rgb(177, 175, 175);
    }

    h1 {
        font-size: 35px;
        color: rgb(177, 175, 175);
        ;
    }

    h4 {
        color: rgb(177, 175, 175);
    }

}
</style>