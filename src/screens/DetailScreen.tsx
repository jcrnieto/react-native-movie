import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
//import { Movie } from '../interfaces/MovieInterfaces';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{

}

export const DetailScreen = ({route}: Props) => {

   const movie = route.params;

   console.log(movie.title)

  return (
     <View>
        <Text>detail screen</Text>
     </View>
  )
}

