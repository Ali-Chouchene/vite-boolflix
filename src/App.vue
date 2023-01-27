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
    fetchApi() {
      store.isLoading = true;
      store.movies = [];
      store.series = [];
      if (store.searchedTerm) {
        const urlM = `${store.apiUri}movie${store.apiKey}${store.apiTerm}` + store.searchedTerm;
        const urlS = `${store.apiUri}tv${store.apiKey}${store.apiTerm}` + store.searchedTerm;
        /**movies call */
        axios.get(urlM)
          .then(res => {
            store.movies = res.data.results;
          }).catch(err => {
            console.log(err.code);
            console.log(err.message);
          })

        /**series call */
        axios.get(urlS)
          .then(res => {
            store.series = res.data.results;
          }).catch(err => {
            console.log(err.code);
            console.log(err.message);
          })
        store.searchedTerm = '';
      }

      else {
        setTimeout(this.setLoading, 500);
        store.searchedTerm = '';
        return
      }
      setTimeout(this.setLoading, 2500);
    },
    setLoading() {
      store.isLoading = false
    }
  }
}
</script>

<template>
  <!--header-->
  <app-header @clicked="fetchApi"></app-header>
  <!--main-->
  <app-main></app-main>
</template>

<style lang="scss" >
/* appheader*/
</style>
