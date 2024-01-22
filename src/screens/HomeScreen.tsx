import React from 'react'
import { ActivityIndicator, View, Dimensions, ScrollView } from 'react-native';
import { UseMovies } from '../hooks/UseMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

export const HomeScreen = () => {

   const { nowPlaying, isLoading, popular, topRated, upconing, peliculasEnCine } = UseMovies();
   //const { isLoading, peliculasEnCine } = UseMovies();
   const { top } = useSafeAreaInsets();
   const { width: windowWidth } = Dimensions.get('window');
   console.log('homescreem', peliculasEnCine)
   if (isLoading) {
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <ActivityIndicator color="red" size={100} />
      </View>
   }

   return (
      <ScrollView>
         <View style={{ marginTop: top + 20 }}>
            <View style={{ height: 440 }}>
               <Carousel
                  data={peliculasEnCine}
                  renderItem={({ item }: any) => <MoviePoster movie={item} />}
                  sliderWidth={windowWidth}
                  itemWidth={300}
                  inactiveSlideOpacity={0.9}
               />
            </View>
            <HorizontalSlider title='En cine' movies={peliculasEnCine}/>
            <HorizontalSlider title='Popular' movies={popular}/>
            <HorizontalSlider title='Top Rated' movies={topRated}/>
            <HorizontalSlider title='Upcoming' movies={upconing}/> 

         </View>
      </ScrollView>
   )
}

