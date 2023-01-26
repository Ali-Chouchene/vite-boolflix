<script >
import axios from 'axios'
import { store } from '../src/data/store'
export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    fetchMovies(url) {
      axios.get(url)
        .then(res => {
          store.movies = res.data.results;
        })
    },
  }
}
</script>

<template>
  <!--header-->
  <header class="bg-dark">
    <div class="container d-flex justify-content-between p-4">
      <div><img class="w-50" src="./assets/img/boolflix.png" alt="boolflix"></div>
      <div class="d-flex align-items-center">
        <form class="d-flex" role="search">
          <input class="form-control me-1" type="search" placeholder="Cerca" aria-label="Search">
          <button class="btn btn-outline-danger" type="button">Trova</button>
        </form>
      </div>
    </div>
  </header>
  <!--main-->
  <main class="bg-secondary">
    <div class="container py-5">
      <h1 class="py-5">FILM</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  </main>
</template>

<style scoped lang="scss" >
/* appheader*/
header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
}


/* appmain */
// main {
//   background-color: gray;
// }
</style>
