import { View,Image, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS,assets } from '../constants'
import {CircleButton, ReactButton} from './Button';
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const NFTCard = ({data}) => {//получаю данные 
 const navigation=useNavigation() 
  
    return (
    <View 
    style={{ 
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom:SIZES.extraLarge,
      margin:SIZES.base,
      ...SHADOWS.dark, //распростронила тени
//верхние стили получила theme.js там объект содержащий разные значения 

    }}>
<View 
style={{
  width:"100%", 
  height:250,
}}
>
<Image
source={data.image}
resizeMode="cover"//меняю размер 
style={{
  width: "100%",
  height: "100%",
  borderTopLeftRadius: SIZES.font,
  borderTopRightRadius: SIZES.font,
}}
/>
<CircleButton imgUrl={assets.heart} right={10} top={10} />
</View>
<SubInfo/>{/*дополнительная инфа */}
    </View>
  )
}

export default NFTCard;