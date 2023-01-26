<script >
import axios from 'axios'
import { store } from '../src/data/store'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
  name: 'App',
  components: { AppHeader, AppMain },
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
  <app-main></app-main>
</template>

<style lang="scss" >
/* appheader*/
</style>
