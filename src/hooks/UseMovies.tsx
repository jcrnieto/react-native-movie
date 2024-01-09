import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieDBMoviesResponse } from "../interfaces/MovieInterfaces"


export const UseMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [peliculasEnCine, setpeliculasEnCine] = useState<Movie[]>([]);
    const [peliculasPopulares, setpeliculasPopulares] = useState<Movie[]>([])

    const getMovies = async () => {
         const respNowPlaying = await  movieDB.get<MovieDBMoviesResponse>('/now_playing');
         const respPopular = await  movieDB.get<MovieDBMoviesResponse>('/popular');

         setpeliculasEnCine(respNowPlaying.data.results);
         setpeliculasEnCine(respPopular.data.results)


         setIsLoading(false);
    }

    useEffect(() => {
         getMovies()
      }, [])
     
    return {
        peliculasEnCine,
        isLoading,
        peliculasPopulares
    }
 
}
