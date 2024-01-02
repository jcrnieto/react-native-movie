import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native';
import { UseMovies } from '../hooks/UseMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

     const {peliculasEnCine, isLoading} = UseMovies();
     const { top } = useSafeAreaInsets()
    
     if(isLoading) {
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           <ActivityIndicator color="red" size={ 100 }/>
        </View>
     }
    
  return (
     <View style={{marginTop: top + 20}}>
        <MoviePoster
          movie={peliculasEnCine[0]}
        />
     </View>
  )
}

