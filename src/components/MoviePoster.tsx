import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Movie } from '../interfaces/MovieInterfaces';

interface Props {
    movie: Movie;
}


export const MoviePoster = ({ movie }: Props) => {

   const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
   console.log(uri)
  return (
     <View>
         <Image 
          source={{uri}}
          style= {styles.image}
          /> 
     </View>
  )
}


const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
})