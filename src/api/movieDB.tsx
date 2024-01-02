import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '9078e2dbe447ae39d2c39033a26174c3',
        language: 'en-ES'
    }
})

export default movieDB;