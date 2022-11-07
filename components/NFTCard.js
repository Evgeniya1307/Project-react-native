import { View,Image, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS,assets } from '../constants'

const NFTCard = ({data}) => {//получаю данные 
 const navigation=useNavigation() 
  
    return (
    <View style={{ 
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom:SIZES.extraLarge,
      margin:SIZES.base,
      ...SHADOWS.dark, //распростронила тени
//верхние стили получила theme.js там объект содержащий разные значения 

    }}>
      <Text>NFTCard</Text>
    </View>
  )
}

export default NFTCard