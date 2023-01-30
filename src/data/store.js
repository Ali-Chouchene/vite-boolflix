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


    /** filtro generi */
    apiGenres: 'https://api.themoviedb.org/3/discover/',
    /**genere cercato */
    searchedGenre: '&with_genres=',


    /**movies array */
    movies: [],
    /**series array */
    series: [],

    /**titolo cercato */
    searchedTerm: '',

    /** base url images */
    imgBase: 'https://image.tmdb.org/t/p/w342',
    imgPlaceHolder: 'https://moviereelist.com/wp-content/uploads/2019/07/poster-placeholder.jpg',

    /** array lingue con img */
    lang: ['it', 'en', 'fr', 'ca', 'cn', 'es', 'hr', 'ja', 'ml', 'nl', 'sh',],

    /** generi */
    genres: [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        },
        {
            "id": 10759,
            "name": "Action & Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },

        {
            "id": 10762,
            "name": "Kids"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10763,
            "name": "News"
        },
        {
            "id": 10764,
            "name": "Reality"
        },
        {
            "id": 10765,
            "name": "Sci-Fi & Fantasy"
        },
        {
            "id": 10766,
            "name": "Soap"
        },
        {
            "id": 10767,
            "name": "Talk"
        },
        {
            "id": 10768,
            "name": "War & Politics"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
})