import React from 'react'
import { ActivityIndicator, View, Dimensions, Text, FlatList, ScrollView } from 'react-native';
import { UseMovies } from '../hooks/UseMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

export const HomeScreen = () => {

   const { peliculasEnCine, isLoading } = UseMovies();
   const { top } = useSafeAreaInsets();
   const { width: windowWidth } = Dimensions.get('window');

   if (isLoading) {
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <ActivityIndicator color="red" size={100} />
      </View>
   }

   return (
      <ScrollView>
          <View style={{ marginTop: top + 20 }}>
         <View style={{height:440}}>
            <Carousel
               data={peliculasEnCine}
               renderItem={({ item }: any) => <MoviePoster movie={item} />}
               sliderWidth={windowWidth}
               itemWidth={300}
            />
         </View>
         <View style={{height:250, backgroundColor:'red'}}>
             <Text style={{fontSize:30, fontWeight:'bold'}}>En cine</Text>
             <FlatList
                 data={peliculasEnCine}
                 renderItem={({ item }: any) => 
                      <MoviePoster movie={item} width={140} height={200}
                 />}
                 keyExtractor={(item)=>item.id.toString()}
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
             />
         </View>
         <View style={{height:250, backgroundColor:'red'}}>
             <Text style={{fontSize:30, fontWeight:'bold'}}>En cine</Text>
             <FlatList
                 data={peliculasEnCine}
                 renderItem={({ item }: any) => 
                      <MoviePoster movie={item} width={140} height={200}
                 />}
                 keyExtractor={(item)=>item.id.toString()}
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
             />
         </View>
      </View>
      </ScrollView>
   )
}

