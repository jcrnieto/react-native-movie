import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Movie } from '../interfaces/MovieInterfaces';

interface Props {
    movie: Movie;
    height?: number;
    width?: number
}


export const MoviePoster = ({ movie, height=420, width=300 }: Props) => {

   const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  //console.log(uri)
  return (
     <View style={{
        width,
        height,
        marginHorizontal: 5
     }}>
         <View style={styles.imageContainer}>
          <Image 
           source={{uri}}
           style= {styles.image}
           /> 
          </View>
     </View>
  )
}


const styles = StyleSheet.create({
    image: {
        flex:1,
        borderRadius:18
    },
    imageContainer:{
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    }
})