import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieDBMoviesResponse } from "../interfaces/MovieInterfaces"

interface MovieState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const UseMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
     const [peliculasEnCine, setpeliculasEnCine] = useState<Movie[]>([]);
    //const [peliculasPopulares, setpeliculasPopulares] = useState<Movie[]>([]);

    const [moviState, setMovieState] = useState<MovieState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });

    const getMovies = async () => {
         const respNowPlaying =await movieDB.get<MovieDBMoviesResponse>('/now_playing');

         const nowPlayingPromise =  movieDB.get<MovieDBMoviesResponse>('/now_playing');
         const popularPromise =  movieDB.get<MovieDBMoviesResponse>('/popular');
         const topRatedPromise =  movieDB.get<MovieDBMoviesResponse>('/top_rated');
         const upcomingPromise =  movieDB.get<MovieDBMoviesResponse>('/upcoming');
        
         const resp = await Promise.all([
            nowPlayingPromise,
            popularPromise, 
            topRatedPromise,
            upcomingPromise
         ]);
         setpeliculasEnCine(respNowPlaying.data.results)
         //console.log('fdd',setpeliculasEnCine(respNowPlaying.data.results))
         setMovieState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results , 
            topRated: resp[2].data.results ,
            upcoming: resp[3].data.results
         })
        
         setIsLoading(false);
    }

    useEffect(() => {
         getMovies()
      }, [])
     
    return {
       ...moviState,
       isLoading,
    }
 
}
