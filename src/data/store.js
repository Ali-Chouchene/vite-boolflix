import { reactive } from 'vue';
export const store = reactive({

    /**Loader */
    isLoading: false,

    /** original api + movie OR tv(series) */
    apiUri: 'https://api.themoviedb.org/3/search/',

    /**api key */
    apiKey: '?api_key=b481e93ec7c1abb9a9cd959e916cea8b',
    /**query + SEARCHED WORD */
    apiTerm: '&query=',

    /**movies array */
    movies: [],
    /**series array */
    series: [],

    /**titolo cercato */
    searchedTerm: '',

    /** base url images */
    imgBase: 'https://image.tmdb.org/t/p/w342',

    /** array lingue con img */
    lang: ['it', 'en', 'fr', 'ca', 'cn', 'es', 'hr', 'ja', 'ml', 'nl', 'sh',]
})