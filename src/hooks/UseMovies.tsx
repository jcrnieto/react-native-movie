import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieDBNowPlating } from "../interfaces/MovieInterfaces"


export const UseMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [peliculasEnCine, setpeliculasEnCine] = useState<Movie[]>([])

    const getMovies = async () => {
         const resp = await  movieDB.get<MovieDBNowPlating>('/now_playing');
         setpeliculasEnCine(resp.data.results)

         setIsLoading(false);
    }

    useEffect(() => {
         getMovies()
      }, [])
     
    return {
        peliculasEnCine,
        isLoading
    }
 
}
