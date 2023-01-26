<script >
import axios from 'axios'
import { store } from '../src/data/store'
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: { AppHeader },
  data() {
    return {
      store,
    }
  },
  methods: {
    fetchMovies() {
      store.movies = [];
      store.series = [];
      if (store.searchedTerm) {
        const urlM = `${store.apiUri}movie${store.apiKey}${store.apiTerm}` + store.searchedTerm;
        const urlS = `${store.apiUri}tv${store.apiKey}${store.apiTerm}` + store.searchedTerm;
        axios.get(urlM)
          .then(res => {
            store.movies = res.data.results;
          })
        axios.get(urlS)
          .then(res => {
            store.series = res.data.results;
          })
        store.searchedTerm = '';
      } else {
        store.searchedTerm = '';
        return
      }

    },
  }
}
</script>

<template>
  <!--header-->
  <app-header @clicked="fetchMovies"></app-header>
  <!--main-->
  <main class="bg-secondary">
    <div class="container py-5">
      <h1 class="py-5">FILM</h1>
      <ul>
        <li v-for="movie in store.movies" :key="movie.id">
          {{ movie.title }}
        </li>
      </ul>
      <h1 class="py-5">SERIE</h1>
      <ul>
        <li v-for="serie in store.series" :key="serie.id">
          {{ serie.name }}
        </li>
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
